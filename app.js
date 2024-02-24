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
    // const api = await HomeyAPI.forCurrentHomey( this.homey );
    // this.api = await HomeyAPI.createAppAPI({ homey: this.homey });

    this.api = await HomeyAPI.createAppAPI({
      homey: this.homey, 
      debug: true 
    });
  
   this.devices = await this.api.devices.getDevices();
   // this.log('devices: ', devices);
   this.systemInfo = await this.api.system.getInfo( ).catch( this.error );
   this.log('systemInfo homeyModelName: ', this.systemInfo.homeyModelName);
   this.storageInfo = await this.api.system.getStorageInfo( ).catch( this.error );
   this.log('storageInfo: ', this.storageInfo);

   this.log('MyApp has been initialized');
  }
}

module.exports = MyApp;
