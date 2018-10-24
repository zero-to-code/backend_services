const fs = require('fs');
const express = require('express')

const app = express()

// Endpoint for GET /api/reports/:id requests.
app.get('/api/reports/:report_id', function (request, response) {
  const reportID = request.params.report_id;

  // Use template string & node's built-in `__dirname` variable to
  // create path to requested JSON data.
  const path = `${__dirname}/../database/processed/${reportID}.json`;

  const report = JSON.parse(fs.readFileSync(path, 'utf-8'))

  response.json(report);
});

// export application
module.exports = app;
