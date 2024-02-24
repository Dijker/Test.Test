# TestTest

Adds support for MyBrand devices.

Works on 2023
✓ Connecting to `1 Homey Pro (Early 2023)`...
✓ Starting `tes.test@1.0.0` remotely...
✓ Starting debugger at 0.0.0.0:9229...
 — Open `about://inspect` in Google Chrome and select the remote target.
✓ Starting `tes.test@1.0.0` in a Docker container...
 — Press CTRL+C to quit.
─────────────── Logging stdout & stderr ───────────────
Debugger listening on ws://0.0.0.0:9229/9d8828d4-79c5-4d99-b74d-e1328f5334fe
For help, see: https://nodejs.org/en/docs/inspector
2024-02-24T22:21:50.693Z [log] [MyApp] Start MyApp onInit 
2024-02-24T22:21:50.768Z [log] [MyApp] [homey-api] GET https://10-1-13-198.homey.homeylocal.com/api/manager/devices/device
2024-02-24T22:21:51.828Z [log] [MyApp] [homey-api] GET https://10-1-13-198.homey.homeylocal.com/api/manager/system/
2024-02-24T22:21:52.215Z [log] [MyApp] [homey-api] [ManagerSystem] getInfo took 386ms
2024-02-24T22:21:52.215Z [log] [MyApp] systemInfo homeyModelName:  Homey Pro (Early 2023)
2024-02-24T22:21:52.215Z [log] [MyApp] [homey-api] GET https://10-1-13-198.homey.homeylocal.com/api/manager/system/storage
2024-02-24T22:21:54.929Z [log] [MyApp] [homey-api] [ManagerSystem] getStorageInfo took 2714ms
2024-02-24T22:21:54.930Z [log] [MyApp] storageInfo:  {
  total: 2657828864,
  free: 959934464,
  types: {
    swap: { name: 'Swap', size: 972029952 },
    'homey:app:com.sonos': { name: 'Sonos', size: 775266 },
[...]]
    'homey:manager:system:database': { name: 'Instellingen', size: 1325344 },
    other: { name: 'Overige', size: 186215823 }
  },
  used: 1697894400
}
2024-02-24T22:21:54.947Z [log] [MyApp] MyApp has been initialized


Does not work on Homey 201x
✓ Installing Homey App on `2 My Homey (2019)` (https://10-1-13-83.homey.homeylocal.com)...
✓ Homey App `tes.test` successfully installed
✓ Running `tes.test`, press CTRL+C to quit
 — Profile your app's performance at https://go.athom.com/app-profiling?homey=5f609df6dce8fb0c916deede&app=tes.test
─────────────── Logging stdout & stderr ───────────────
2024-02-24T22:23:33.155Z [log] [MyApp] Start MyApp onInit 
2024-02-24T22:23:33.230Z [log] [MyApp] [homey-api] GET http://localhost:80/api/manager/devices/device/
2024-02-24T22:23:33.917Z [log] [MyApp] [homey-api] GET http://localhost:80/api/manager/system/
2024-02-24T22:23:33.991Z [log] [MyApp] [homey-api] [ManagerSystem] getInfo took 74ms
2024-02-24T22:23:33.992Z [log] [MyApp] systemInfo homeyModelName:  Homey Pro (Early 2019)
2024-02-24T22:23:33.995Z [log] [MyApp] [homey-api] GET http://localhost:80/api/manager/system/storage
2024-02-24T22:23:39.069Z [err] [MyApp] APIErrorTimeout: Timeout after 5000ms
    at Function.timeout (/node_modules/homey-api/lib/Util.js:57:26)
    at HomeyAPIV2.call (/node_modules/homey-api/lib/HomeyAPI/HomeyAPIV3.js:453:28)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ManagerClass.__request (/node_modules/homey-api/lib/HomeyAPI/HomeyAPIV3/Manager.js:322:16) {
  statusCode: 408
}
2024-02-24T22:23:39.182Z [log] [MyApp] storageInfo:  undefined
2024-02-24T22:23:39.183Z [log] [MyApp] MyApp has been initialized
───────────────────────────────────────────────────────
✓ Uninstalling `tes.test`...