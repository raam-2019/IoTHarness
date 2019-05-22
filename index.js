var awsIot = require("aws-iot-device-sdk");

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts
// to connect with a client identifier which is already in use, the existing
// connection will be terminated.
//
//These keys can be retrieved from S3
var device = awsIot.device({
  keyPath: "204c2c9eec-private.pem.key",
  certPath: "204c2c9eec-certificate.pem.crt",
  caPath: "AmazonRootCA1.pem",
  clientId: "testing123",
  host: "a1f5ieskd1ka9e-ats.iot.us-east-1.amazonaws.com"
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device.on("connect", function() {
  console.log("connected");
});

let id = 1;
setInterval(() => {
  console.log("Publishing");
  device.publish(
    //* This is your channel - change this to align with the IoT Core ingestion channel
    "raamracer",
    //* This is your data payload, this will need to get aligned with the Asset Tracking Infrastructure
    //* Tentative Schema should be 
    //* {id: id, coordinates: [], metric1: foo, metricN: bar, timestamp: epoch, expiration: epoch + 360s}
    //* Ine metric per key
    //* ID is the primary query key for Dynamo
    JSON.stringify({
      id: 1,
      coordinates: [0,0]
      speed: 1,
      altitude: 1,
      energy: 1,
      ts: Date.now(),
      expiration: Date.now() + 3600
    })
  );
  id++;
}, 1000);
