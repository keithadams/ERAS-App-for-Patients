import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// import { SetupBirthdate } from '../setup-birthdate/setup-birthdate';

/*
  Generated class for the SetupSmoker page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setup-smoker',
  templateUrl: 'setup-smoker.html'
})
export class SetupSmoker {

  smoker;
  smokerError;
  constructor(public navCtrl: NavController, public storage: Storage) {
    this.smokerError = false;


    this.storage.get('profile_smoker').then((val) => {
      if (val) {
        this.smoker = val;
      }
    })
  }

  ionViewDidLoad() {
    console.log('Hello SetupSmoker Page');
  }

  navToNext() {
    if (this.validateResponse()) {
      this.saveResponse();
      // this.navCtrl.push(SetupBirthdate);
    }
  }

  navToPrev() {
    if (this.validateResponse()) {
      this.saveResponse();
      this.navCtrl.pop(); 
    }
  }

   validateResponse() {
    if (!this.smoker) {
      this.smokerError = true;
      return false;
    }
    else {
      this.smokerError = false;
    }

    return true;
  }

  saveResponse() {
    this.storage.set('profile_smoker', this.smoker);
  }

}
