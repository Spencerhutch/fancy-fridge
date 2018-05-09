require('dotenv').load();
var express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  port = process.env.PORT || 3000;



var KeenTracking = require('keen-tracking');

// This is your actual Project ID and Write Key
var client = new KeenTracking({
  projectId: process.env.KEEN_PROJECT_ID,
  writeKey: process.env.KEEN_WRITE_KEY
});

// Record an event
// client.recordEvent('pageviews', {
//   title: document.title
// });

app.use(bodyParser.json());

app.post('/', function (req, res) {
  var body = req.body;
  console.log('Body: ', body)
  // var trackingNumber = body.msg.tracking_number;
  // var slug = body.msg.slug;
  // var token = body.msg.unique_token;

  // console.log(trackingNumber, slug, token);

  res.json({
      message: 'ok got it!'
  });
});

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});
