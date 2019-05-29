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
      altitude: 345.09564,
      source: "foo",
      hemoTotal: null,
      palt: null,
      speed: 0,
      hemoPercent: null,
      watchBattery: null,
      pcc: null,
      temperature: 18.8,
      power: null,
      aeroBattery: null,
      id: "0",
      ptot: null,
      timestamp: Math.floor(Date.now() / 1000),
      watchHeartRate: null,
      cda: null,
      heading: 0.9446823,
      locationQuality: null,
      coordinates: [-88.27841115184128, 43.05916168726981],
      pressure: 101368.89,
      eqBreathingRate: 0,
      cadence: 0,
      pair: null,
      quality: null,
      sensorID: null,
      eqCoreTemp: -1,
      eqSkinTemp: 22.2,
      eqHeartRate: 0,
      aeroPressure: null,
      androidBattery: 0.92,
      mo2Battery: null
    })
  );
  id++;
}, 5000);
