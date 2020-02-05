import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../../home/home';
import { SetupSupport } from '../setup-support/setup-support';


/*
  Generated class for the SetupDiabetic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setup-diabetic',
  templateUrl: 'setup-diabetic.html'
})
export class SetupDiabetic {

  diabetic;
  fhir_diabetic;
  diabeticError;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.diabeticError = false;

    this.storage.get('fhir_diabetic').then((val) => {
      if (val) {
        this.fhir_diabetic = val;
        console.log('fhir_diabetic =', this.fhir_diabetic);
      }
    })

    this.storage.get('profile_diabetic').then((val) => {
      if (val) {
        this.diabetic = val;
      }
      else {
        // nothing
      }
    })

  }

  ionViewDidLoad() {
    console.log('Hello SetupDiabetic Page');
  }

  submit() {
    if (this.validateResponse()) {
      this.saveResponse();
      this.storage.set('profile_complete', 1);
      this.navCtrl.setRoot(HomePage);
    }

  }

  navToPrev() {
    if (this.validateResponse()) {
      this.saveResponse();
      this.navCtrl.setRoot(SetupSupport); 
    }
  }

   validateResponse() {
    if (!this.diabetic) {
      this.diabeticError = true;
      return false;
    }
    else {
      this.diabeticError = false;
    }

    return true;
  }

  saveResponse() {
    this.storage.set('profile_diabetic', this.diabetic);
  }

}
