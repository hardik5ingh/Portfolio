import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
import { google } from "googleapis";

dotenv.config({ path: '.env' });

const app = express();

const allowedOrigins = [
  'http://localhost:5173',          
  'http://localhost:3000',          
  'https://hardik5ingh.netlify.app' 
];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 4000,
  ssl: {
    miniVersion:"TLSv1.2",
    rejectUnauthorized: true 
  }
});

db.connect((err) => {
  if (err) {
    console.error('TiDB Connection Error:', err.message);
  } else {
    console.log('Connected to TiDB Cloud successfully!');
  }
});

if (!process.env.GOOGLE_CREDENTIALS) {
  throw new Error("GOOGLE_CREDENTIALS environment variable not found");
}

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
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
        values: [[new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), name, email, subject, message]],
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

  const sql = 'INSERT INTO form (Name, Email, Subject, Message) VALUES (?, ?, ?, ?)';

  db.query(sql, [name, email, subject, message], async (err, result) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ error: "database error" });
    }
    
    await appendToSheet(name, email, subject, message);
    res.json({ success: true, id: result.insertId });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on port ${port}`));