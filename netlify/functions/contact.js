import mysql from 'mysql2/promise';
import { google } from 'googleapis';

const SPREADSHEET_ID = "1yATbw4K-CBwWI_rwFO5OQKWXT34qY74-HK2ppkkTY-Y";

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, subject, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Name, email, and message are required.' })
    };
  }

  try {
    // MySQL
    const db = await mysql.createConnection(process.env.MYSQL_URL);
    await db.execute(
      'INSERT INTO portfolio (Name, Email, Subject, Message) VALUES (?, ?, ?, ?)',
      [name, email, subject, message]
    );
    await db.end();

    // Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:E',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[new Date().toLocaleString(), name, email, subject, message]],
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error.' })
    };
  }
};