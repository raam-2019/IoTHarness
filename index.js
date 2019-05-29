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
  keyPath: "../local_IoT_Test/204c2c9eec-private.pem.key",
  certPath: "../local_IoT_Test/204c2c9eec-certificate.pem.crt",
  caPath: "../local_IoT_Test/AmazonRootCA1.pem",
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

device.on("reconnect", () => {
  console.log("reconnected");
});

let id = 1;
setInterval(() => {
  console.log(`Publishing:${Math.floor(Date.now() / 1000)}`);
  device.publish(
    //* This is your channel - change this to align with the IoT Core ingestion channel
    "assetingest",
    //* This is your data payload, this will need to get aligned with the Asset Tracking Infrastructure
    //* Tentative Schema should be
    //* {id: id, coordinates: [], metric1: foo, metricN: bar, timestamp: epoch,}
    //* Ine metric per key
    //* ID is the primary query key for Dynamo
    JSON.stringify({
      altitude: 242.68196,
      heading: 1.5691032,
      coordinates: [-88.27844769693911, 43.05908909998834],
      pressure: 100965.43,
      eqBreathingRate: 0,
      cadence: 0,
      speed: 0.05598415,
      eqCoreTemp: -1,
      quality: 4,
      eqSkinTemp: 25.2,
      eqHeartRate: 0,
      temperature: 23.33,
      id: "0",
      timestamp: Math.floor(Date.now() / 1000)
    })
  );
  id++;
}, 1000);
