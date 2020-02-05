import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the Question page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'navigation-details-day-of',
  templateUrl: 'navigation-details-day-of.html'
})
export class NavigationDetailsDayOfPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
  selector: 'page-day-of-surgery-edu',
  templateUrl: 'day-of-surgery-edu.html'
})
export class DayOfSurgeryEdu {
  items = [];

  constructor(public navCtrl: NavController) {
    this.items = [
      {
        'title': 'Day of Surgery: At the Hospital',
        'icon': 'book',
        'color': '#0066FF'
      },
      {
        'title': 'Pre-Operative Holding Area (POHA)',
        'icon': 'book',
        'description': 'After check-in, you will be brought to the pre-op suite where you'
        +  ' will be examined by a nurse and members of the anesthesia and surgery team.'
        +  ' Your care providers will be asking you similar questions. This is for your'
        +  ' own safety and to make sure you are getting the right care.',
        'color': '#787878',
        'image_1': 'assets/img/Dayofsurgeryscreen2a.png',
        'description_4': 'Your family members and/or friends will be asked to sit in the waiting'
          + ' area during your procedure. You will be reunited with them when you wake up and are in'
          +  ' your room.',
        'image_2':'assets/img/Dayofsurgeryscreen2b.png',
  
      },
      {
        'title': 'Pre-Op Pain Control',
        'icon': 'book',
        'description_1': 'At Emory, our goal is to control your pain. Our approach is to avoid'
          + ' narcotic (or opiate) pain medication. Narcotics can cause you to feel tired, sick,'
          + ' and not interested in moving. As a part of ERAS, we will provide you with an integrated'
          + ' approach to controlling your pain and help you recover faster.',
          'image_1':'assets/icon/recovery-icon.png',
        'color': '#0066FF'

      },
      {
        'title': 'Preventing Blood Clots',
        'icon': 'book',
        'image_1': 'assets/img/Dayofsurgeryscreen3.png',
        'description': 'You may also receive a heparin shot, or another blood thinner, to help'
          + ' prevent blood clots while you are in the hospital. We will also apply compression'
          + ' socks to your legs to help the blood circulate well while you are in the hospital.',
        'color': '#787878'
      },
      {
        'title': 'Maintaining Body Temperature',
        'icon': 'book',
        'description_1': 'A purple vest called “Bair Paws” will be applied in the pre-op holding area.'
          + ' This vest is meant to keep you warm prior to surgery, and help maintain your temperature'
          + ' during your procedure.',
          'image_1':'assets/img/thermometer.png',
        'color': '#0066FF'
      },
    ]
  }


  openNavDetailsDayOfPage(item) {
    this.navCtrl.push(NavigationDetailsDayOfPage, { item: item });
  }

}
