import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SetupBirthdate } from '../setup-birthdate/setup-birthdate';
import { SetupSmartphone } from '../setup-smartphone/setup-smartphone';

import { NotificationScheduler } from '../../../providers/notification-scheduler';



/*
  Generated class for the SetupSurgeryDate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setup-surgery-date',
  templateUrl: 'setup-surgery-date.html',
  providers: [NotificationScheduler]
})
export class SetupSurgeryDate {
  surgeryDate;
  surgeryDateError;
  surgeryTime;
  surgeryTimeError;

  minSurgeryDate;
  maxSurgeryDate;

  constructor(public navCtrl: NavController, public storage: Storage, public notification : NotificationScheduler) {
    this.surgeryDateError = false;
    this.surgeryTimeError = false;

    var today = new Date();
    this.minSurgeryDate = this.convert_date_to_yyyy_mm_dd(this.incrementDate(today,-7));
    this.maxSurgeryDate = this.convert_date_to_yyyy_mm_dd(this.incrementDate(today,730));



    this.storage.get('profile_surgery_date').then((val) => {
      if (val) {
        this.surgeryDate = val;
      }
      else {
        this.surgeryDate = this.getToday();
      }
    })

    this.storage.get('profile_surgery_time').then((val) => {
      if (val) {
        this.surgeryTime = val;
      }
      else {
        this.surgeryTime = "09:00";
      }
    })
  }

  ionViewDidLoad() {
    console.log('Hello SetupSurgeryDate Page');
  }

  navToNext() {
    if (this.validateResponse()) {
      this.saveResponse();
      this.navCtrl.setRoot(SetupSmartphone);
    }
  }


  navToPrev() {
    if (this.validateResponse()) {
      this.saveResponse();
      this.navCtrl.setRoot(SetupBirthdate); 
    }
  }

  getToday() {
    return this.convert_date_to_yyyy_mm_dd(new Date());
  }


  incrementDate(date, amount) {
    var tmpDate = new Date(date);
    tmpDate.setDate(tmpDate.getDate() + amount)
    return tmpDate;
  };

  convert_date_to_yyyy_mm_dd(date) {
    var yyyy = date.getFullYear();
    if(date.getDate()<10) {
      var dd='0'+date.getDate();
    } 
    else {
      var dd=''+date.getDate();
    }
    if(date.getMonth()+1<10) {
      var mm='0'+(date.getMonth()+1);
    } 
    else {
      var mm=''+(date.getMonth()+1);
    }
    return yyyy+'-'+mm+'-'+dd 
  }

  convert_yyyy_mm_dd_to_date(s) {
    var yyyy = parseInt(s.substring(0,4));
    var mm = parseInt(s.substring(5,7)) - 1 ;
    var dd = parseInt(s.substring(8,11));

    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setFullYear(yyyy);
    date.setMonth(mm);
    date.setDate(dd);

    return date;
  }

   validateResponse() {
     var isValid = true;

    // if (this.surgeryDate == this.getToday()) {
    //   this.surgeryDateError = true;
    //   isValid = false;
    // }
    // else {
    //   this.surgeryDateError = false;
    // }

    
    // if (!this.surgeryTime) {
    //   this.surgeryTimeError = true;
    //   isValid = false;
    // }
    // else {
    //   this.surgeryTimeError = false;
    // }

    return isValid;
  }

  saveResponse() {
    this.notification.scheduleAllNotifications(this.surgeryDate,this.surgeryTime);
    this.storage.set('profile_surgery_date', this.surgeryDate);
    this.storage.set('profile_surgery_time', this.surgeryTime);
  }
  

}
