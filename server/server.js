const electron = require('electron');
const app = electron.app;
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors')
const port = 3000;
const expressApp = express();

// Parse incoming JSON data
expressApp.use(bodyParser.json());

// Allow cross-origin requests from localhost:4200
expressApp.use(cors({ origin: 'http://localhost:4200' }));

//Post request
expressApp.post('/api/settings', (req, res) => {
  const { weatherApiUrl, apiKey, name } = req.body;

  // Connect to SQLite database
  const db = new sqlite3.Database('mydb.db');

  // Check if the settings for this name already exist in the database
  db.get('SELECT * FROM settings WHERE name = ?', [name], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error checking settings');
    } else if (row) {
      // If settings exist for this name, update the apiKey and weatherApiUrl fields
      db.run('UPDATE settings SET apiKey = ?, weatherApiUrl = ? WHERE name = ?', [apiKey, weatherApiUrl, name], (err) => {
        if (err) {
          console.error(err.message);
          res.status(500).send('Error updating settings');
        } else {
          console.log('Settings updated');
          res.status(200).send('Settings updated');
        }
      });
    } else {
      // If settings don't exist for this name, insert a new row
      db.run('INSERT INTO settings (weatherApiUrl, apiKey, name) VALUES (?, ?, ?)', [weatherApiUrl, apiKey, name], (err) => {
        if (err) {
          console.error(err.message);
          res.status(500).send('Error inserting settings');
        } else {
          console.log('Settings inserted');
          res.status(200).send('Settings inserted');
        }
      });
    }
  });

  // Close database connection
  db.close();
});
//new

expressApp.get('/api/setting', (req, res) => {
  // Connect to SQLite database
  const db = new sqlite3.Database('mydb.db');

  // Select all data from settings table
  db.all('SELECT * FROM settings', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error retrieving settings');
    } else {
      res.status(200).send(rows);
    }
  });

  // Close database connection
  db.close();
});


// Start server
expressApp.listen(port, () => console.log(`Server listening on port ${port}`));
