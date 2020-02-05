import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SetupBirthdate } from '../setup-birthdate/setup-birthdate';
import { FhirService } from '../../../providers/fhir-service'

/*
  Generated class for the SetupName page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setup-name',
  templateUrl: 'setup-name.html',
  providers: [FhirService]
})
export class SetupName {

  firstName;
  firstNameError;
  lastName;
  lastNameError;
  constructor(public navCtrl: NavController, public storage: Storage, public fhirService: FhirService) {

    this.firstNameError = false;
    this.lastNameError = false;

    this.storage.get('profile_first_name').then((val) => {
      if (val) {
        this.firstName = val;
      }
      
    })

    this.storage.get('profile_last_name').then((val) => {
      if (val) {
        this.lastName = val;
      }
    })

  }

  ionViewDidLoad() {
    console.log('Hello SetupName Page');
  }

  navToNext() {
    if (this.validateResponse()) {
      this.saveResponse();
      this.navCtrl.setRoot(SetupBirthdate); 
    }
  }

  navToPrev() {
    if (this.validateResponse()) {
      this.saveResponse();
      // this.navCtrl.setRoot(); 
    }
  }

  validateResponse() {
    var isValid = true;

    if (!this.firstName) {
      this.firstNameError = true;
      isValid = false;
    }
    else {
      this.firstNameError = false;
    }

    
    if (!this.lastName) {
      this.lastNameError = true;
      isValid = false;
    }
    else {
      this.lastNameError = false;
    }

    return isValid;
  }


  saveResponse() {
    this.storage.set('profile_first_name', this.firstName);
    this.storage.set('profile_last_name', this.lastName);
    this.fhirDiabetesCheck(this.firstName,this.lastName);
  }

  fhirDiabetesCheck(firstName,lastName) {
    this.fhirService.hasDiabetes(firstName,lastName)
    .then( data => {
      this.storage.set('fhir_diabetic',data);
      if (data) {
        this.storage.set('profile_diabetic', 'Yes');
      }
      
    })
  }



}
