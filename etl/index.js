const fs = require('fs');
const csv = require('csvtojson');

const csvPath = '../database/raw/healthcare.csv';
const jsonFilePath = '../database/processed/healthcare.json'

csv()
  .fromFile(csvPath)
  .then(writeJSON);

function writeJSON(jsonObj) {
  fs.writeFile(jsonFilePath, JSON.stringify(jsonObj));
}
