import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SetupSmartphone } from '../setup-smartphone/setup-smartphone';
import { SetupDiabetic } from '../setup-diabetic/setup-diabetic';

/*
  Generated class for the SetupSupport page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setup-support',
  templateUrl: 'setup-support.html'
})
export class SetupSupport {

  support;
  supportError;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.supportError = false;

    this.storage.get('profile_support').then((val) => {
      if (val) {
        this.support = val;
      }
      else {
        //nothing
      }
    })
  }

  ionViewDidLoad() {
    console.log('Hello SetupSupport Page');
  }

  navToNext() {
    if (this.validateResponse()) {
      this.saveResponse();
      this.navCtrl.setRoot(SetupDiabetic);
    }
  }

  navToPrev() {
    if (this.validateResponse()) {
      this.saveResponse();
      this.navCtrl.setRoot(SetupSmartphone); 
    }
  }

   validateResponse() {
    if (!this.support) {
      this.supportError = true;
      return false;
    }
    else {
      this.supportError = false;
    }

    return true;
  }

  saveResponse() {
    this.storage.set('profile_support', this.support);
  }

}
