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
```

If you need to have this modified, please cut an issue in this repo and tag @cmtoomey - I will update and republish shortly.