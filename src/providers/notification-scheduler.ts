import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { LocalNotifications } from 'ionic-native';
import { Platform } from 'ionic-angular';

/*
  Generated class for the NotificationScheduler provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NotificationScheduler {

  isAndroid;
  isIos;
  constructor(public http: Http,platform: Platform) {
    this.isAndroid = platform.is('android');
    this.isAndroid = platform.is('isIos');


  }

  scheduleAllNotifications(surgery_date,surgery_time) {
    // LocalNotifications.clearAll().then( data => {

      console.log(surgery_date);
      console.log(surgery_time);
      let surgery = this.convert_yyyy_mm_dd_to_date(surgery_date);
      let now = new Date();
      surgery.setHours(parseInt(surgery_time.substr(0,2)));
      surgery.setMinutes(parseInt(surgery_time.substr(3,4)));

      let surgery_3_hours_before = new Date(surgery);
      surgery_3_hours_before.setHours(surgery_3_hours_before.getHours()-3);

      let alert_date_time = new Date(surgery);
      alert_date_time.setHours(18);
      alert_date_time.setMinutes(0);

      let notification_title = "Enhanced Recovery After Surgery";
      let notification_text = "Tap here to see today's targets.";

      let notifications = [];

      console.log(surgery);
      console.log(surgery_3_hours_before);
      console.log(alert_date_time);

      let n = {};
      n['id'] = 0;
      n['title'] = notification_title;
      n['text'] = "IMPORTANT: Your surgery is in 3 hours."
      n['at'] = surgery_3_hours_before;
      notifications.push(n);

      for (let i = -14; i < 14; i++){
        let d = this.incrementDate(alert_date_time,i);
        if (d >= now ) {
          let n = {};
          n['id'] = (i+14);
          n['title'] = notification_title;
          n['text'] = notification_text
          n['at'] = d;
          notifications.push(n);
        }
    }
    console.log(notifications);
    LocalNotifications.schedule(notifications);
    // });
  }

  getToday(amount = 0) {
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
    return yyyy+'-'+mm+'-'+dd 
  }

  incrementDate(date, amount) {
    var tmpDate = new Date(date);
    tmpDate.setDate(tmpDate.getDate() + amount)
    return tmpDate;
  };

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



}
