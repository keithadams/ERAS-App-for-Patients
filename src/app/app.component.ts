import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, LocalNotifications } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { SetupName } from '../pages/setup/setup-name/setup-name';





@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, storage: Storage) {

    storage.get('profile_complete').then((result) => {

      if (result) {
        this.rootPage = HomePage;
      }
      else {
        this.rootPage = SetupName;
      }
    });

    storage.get('targets_history').then((val) => {
      if (val) {
        console.log("Targets History Found.");
      }
      else {
        console.log("'Targets History' not found. Initializing.");
        storage.set('targets_history', {});
      }
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      LocalNotifications.on('click', (event, notification, state) => {     
        console.log("Notification Clicked");
      });

      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
