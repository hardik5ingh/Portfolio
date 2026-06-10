import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
import { google } from "googleapis";

dotenv.config({ path: '.env' });

const app = express();
app.use(cors({ origin: 'https://hardik5ingh.netlify.app' }));
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME,
  port:process.env.DB_PORT
});



const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"]
});

const SPREADSHEET_ID = "1yATbw4K-CBwWI_rwFO5OQKWXT34qY74-HK2ppkkTY-Y";

async function appendToSheet(name, email, subject, message) {
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:E',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[new Date().toLocaleString(), name, email, subject, message]],
      },
    });
    console.log("Sheet updated successfully!");
  } catch (err) {
    console.error("Google Sheets error:", err.message);
  }
}

app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  const sql = 'INSERT INTO portfolio (Name, Email, Subject, Message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, subject, message], async (err, result) => { 
    if (err) return res.status(500).json({ error: "database error" });
    await appendToSheet(name, email, subject, message);
    res.json({ success: true, id: result.insertId });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on ${port}`));