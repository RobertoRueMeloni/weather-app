const electron = require('electron');
const app = electron.app;
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors')
const port = 3000;
const expressApp = express();
const axios = require('axios');

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
// get one
expressApp.get('/api/setting/:id', (req, res) => {
  const { id } = req.params;

  // Connect to SQLite database
  const db = new sqlite3.Database('mydb.db');

  // Select the row with the specified ID from the settings table
  db.get('SELECT * FROM settings WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error retrieving setting');
    } else if (row) {
      // If row exists, return the setting
      res.status(200).send(row);
    } else {
      // If row doesn't exist, return a 404 error
      res.status(404).send('Setting not found');
    }
  });

  // Close database connection
  db.close();
});

//weather call
// expressApp.get('/weather', async (req, res) => {
// const params = {
//   access_key: '6418f2cb29c354057783a893ea3649b3',
//   query: 'New York'
// }

// axios.get('https://api.weatherstack.com/current', {params})
//   .then(response => {
//     console.log(response)
//     const apiResponse = response.data;
//    // console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
//   }).catch(error => {
//     console.log(error);
//   });
// });

// Start server
expressApp.listen(port, () => console.log(`Server listening on port ${port}`));
