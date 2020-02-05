import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SetupName } from '../setup-name/setup-name';
import { SetupSurgeryDate } from '../setup-surgery-date/setup-surgery-date';

/*
  Generated class for the SetupBirthdate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setup-birthdate',
  templateUrl: 'setup-birthdate.html'
})
export class SetupBirthdate {

  
  birthdate;
  birthdateError;
  minBirthdate;
  maxBirthdate;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.birthdateError = false;
    this.minBirthdate = '1900';
    this.maxBirthdate = this.getToday();

    this.storage.get('profile_birthdate').then((val) => {
      if (val) {
        this.birthdate = val;
      }
      else {
        this.birthdate = this.getToday();
      }
    })

    
  }

  ionViewDidLoad() {
    console.log('Hello SetupBirthdate Page');
  }

  navToNext() {
    if (this.validateResponse()) {
      this.saveResponse();
      this.navCtrl.setRoot(SetupSurgeryDate);
    }
  }

  navToPrev() {
    if (this.validateResponse()) {
      this.saveResponse();
      this.navCtrl.setRoot(SetupName); 
    }
  }

  getToday() {
    var today = new Date();
    var yyyy = today.getFullYear();

    if(today.getDate()<10) {
      var dd='0'+today.getDate();
    } 
    else {
      var dd=''+today.getDate();
    }

    if(today.getMonth()+1<10) {
      var mm='0'+(today.getMonth()+1);
    } 
    else {
      var mm=''+(today.getMonth()+1);
    }

    return yyyy+'-'+mm+'-'+dd;

  }

  validateResponse() {
    if (this.birthdate == this.getToday()) {
      this.birthdateError = true;
      return false;
    }
    else {
      this.birthdateError = false;
    }
    return true;
  }


  saveResponse() {
    this.storage.set('profile_birthdate', this.birthdate);
  }
}
