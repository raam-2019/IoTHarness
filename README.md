# IoTHarness

A node script for testing IoT Core ingest over MQTT

## To Use

1. Clone repo
2. Install dependencies
3. Retrieve Certificates from S3
4. Copy certs into this folder
5. `node index.js` and monitor from IoT Core console
6. You can observe the flow via CloudWatch for Lambda and in Dynamo console.

---

Current schema

```javascript
JSON.stringify({
      altitude: 345.09564,
      source: null,
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
      timestamp: 1559158701,
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
```

If you need to have this modified, please cut an issue in this repo and tag @cmtoomey - I will update and republish shortly.