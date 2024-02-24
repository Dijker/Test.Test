'use strict';

const Homey = require('homey');

const { HomeyAPI } = require('homey-api');
// const { HomeyAPI } = require('athom-api');

class MyApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('Start MyApp onInit ');
    // Create a HomeyAPI instance. Ensure your app has the `homey:manager:api` permission.

    this.homeyApi = await HomeyAPI.createAppAPI({
      homey: this.homey, 
      debug: true 
    });
  
    // Get all the devices, and log their names.
    const devices = await this.homeyApi.devices.getDevices();
    for(const device of Object.values(devices)) {
      this.log(device.name);
    }
    const systemInfo = await this.homeyApi.system.getInfo( ).catch( this.error );
    this.log('systemInfo homeyModelName: ', systemInfo.homeyModelName);
    const storageInfo = await this.homeyApi.system.getStorageInfo( ).catch( this.error );
    this.log('storageInfo: ', storageInfo);

    this.log('MyApp has been initialized');
  }
}

module.exports = MyApp;
