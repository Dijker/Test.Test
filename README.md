# TestTest

PS C:\Homey\GH2024\tes.test> homey app run     --remote 
✓ Pre-processing app...
✓ Validating app...
✓ App validated successfully against level `debug`
✓ Packing Homey App...
 — App archive size: 4.29 MB, 442 files
✓ Installing Homey App on `1 Homey Pro (Early 2023)` (https://10-1-13-198.homey.homeylocal.com)...
✓ Homey App `tes.test` successfully installed
✓ Running `tes.test`, press CTRL+C to quit
 — Profile your app's performance at https://go.athom.com/app-profiling?homey=63b2d3bd5adcef0b8734c1de&app=tes.test
─────────────── Logging stdout & stderr ───────────────
2024-02-24T22:49:25.236Z [log] [MyApp] Start MyApp onInit 
2024-02-24T22:49:25.288Z [log] [MyApp] [homey-api] GET http://127.0.0.1:80/api/manager/devices/device
2024-02-24T22:49:25.851Z [log] [MyApp] PIR V4
[...]]
2024-02-24T22:49:25.861Z [log] [MyApp] 12 Homey Pro (Early 2023)
2024-02-24T22:49:25.861Z [log] [MyApp] NL_Netherlands
2024-02-24T22:49:25.863Z [log] [MyApp] [homey-api] GET http://127.0.0.1:80/api/manager/system/
2024-02-24T22:49:25.996Z [log] [MyApp] [homey-api] [ManagerSystem] getInfo took 133ms
2024-02-24T22:49:25.996Z [log] [MyApp] systemInfo homeyModelName:  Homey Pro (Early 2023)
2024-02-24T22:49:25.997Z [log] [MyApp] [homey-api] GET http://127.0.0.1:80/api/manager/system/storage
2024-02-24T22:49:27.553Z [log] [MyApp] [homey-api] [ManagerSystem] getStorageInfo took 1557ms
2024-02-24T22:49:27.553Z [log] [MyApp] storageInfo:  {
  total: 2657828864,
  free: 954585088,
  types: {
    swap: { name: 'Swap', size: 972029952 },
    'homey:app:tes.test': { name: 'TestTest', size: 4523501 },
[...]
    'homey:manager:system:database': { name: 'Instellingen', size: 1325344 },
    other: { name: 'Overige', size: 187573329 }
  },
  used: 1703243776
}
2024-02-24T22:49:27.572Z [log] [MyApp] MyApp has been initialized
───────────────────────────────────────────────────────
✓ Uninstalling `tes.test`...
✓ Homey App `tes.test` successfully uninstalled
PS C:\Homey\GH2024\tes.test> homey select
? Choose an active Homey: 2 My Homey (2019)
You have selected `2 My Homey (2019)` as your active Homey.
PS C:\Homey\GH2024\tes.test> homey app run     --remote 
✓ Pre-processing app...
✓ Validating app...
✓ App validated successfully against level `debug`
✓ Packing Homey App...
 — App archive size: 4.29 MB, 442 files
✓ Installing Homey App on `2 My Homey (2019)` (https://10-1-13-83.homey.homeylocal.com)...
✓ Homey App `tes.test` successfully installed
✓ Running `tes.test`, press CTRL+C to quit
 — Profile your app's performance at https://go.athom.com/app-profiling?homey=5f609df6dce8fb0c916deede&app=tes.test
─────────────── Logging stdout & stderr ───────────────
2024-02-24T22:50:32.432Z [log] [MyApp] Start MyApp onInit 
2024-02-24T22:50:32.503Z [log] [MyApp] [homey-api] GET http://localhost:80/api/manager/devices/device/
2024-02-24T22:50:33.068Z [log] [MyApp] 2 My Homey (2019)
2024-02-24T22:50:33.072Z [log] [MyApp] Virtuele Schakelaar
[...]
]
2024-02-24T22:50:33.181Z [log] [MyApp] Motion sensor
2024-02-24T22:50:33.183Z [log] [MyApp] [homey-api] GET http://localhost:80/api/manager/system/
2024-02-24T22:50:33.256Z [log] [MyApp] [homey-api] [ManagerSystem] getInfo took 73ms
2024-02-24T22:50:33.257Z [log] [MyApp] systemInfo homeyModelName:  Homey Pro (Early 2019)
2024-02-24T22:50:33.258Z [log] [MyApp] [homey-api] GET http://localhost:80/api/manager/system/storage
2024-02-24T22:50:38.277Z [err] [MyApp] APIErrorTimeout: Timeout after 5000ms
    at Function.timeout (/node_modules/homey-api/lib/Util.js:57:26)
    at HomeyAPIV2.call (/node_modules/homey-api/lib/HomeyAPI/HomeyAPIV3.js:453:28)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ManagerClass.__request (/node_modules/homey-api/lib/HomeyAPI/HomeyAPIV3/Manager.js:322:16) {
  statusCode: 408
}
2024-02-24T22:50:38.306Z [log] [MyApp] storageInfo:  undefined
2024-02-24T22:50:38.307Z [log] [MyApp] MyApp has been initialized
───────────────────────────────────────────────────────
✓ Uninstalling `tes.test`...
✓ Homey App `tes.test` successfully uninstalled