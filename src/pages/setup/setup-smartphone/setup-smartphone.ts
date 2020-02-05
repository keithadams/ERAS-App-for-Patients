import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SetupSurgeryDate } from '../setup-surgery-date/setup-surgery-date';
import { SetupSupport } from '../setup-support/setup-support';

/*
  Generated class for the SetupSmartphone page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setup-smartphone',
  templateUrl: 'setup-smartphone.html'
})
export class SetupSmartphone {


  smartphone;
  smartphoneError;
  constructor(public navCtrl: NavController, public storage: Storage) {
    this.smartphoneError = false;

    this.storage.get('profile_smartphone').then((val) => {
      if (val) {
        this.smartphone = val;
      }
      else {
        // nothing
      }
    })

  }

  ionViewDidLoad() {
    console.log('Hello SetupSmartphone Page');
  }

  navToNext() {
    if (this.validateResponse()) {
      this.saveResponse();
      this.navCtrl.setRoot(SetupSupport);
    }
  }

  navToPrev() {
    if (this.validateResponse()) {
      this.saveResponse();
      this.navCtrl.setRoot(SetupSurgeryDate); 
    }
  }

   validateResponse() {
    if (!this.smartphone) {
      this.smartphoneError = true;
      return false;
    }
    else {
      this.smartphoneError = false;
    }
    return true;
  }

  saveResponse() {
    this.storage.set('profile_smartphone', this.smartphone);
  }

}
