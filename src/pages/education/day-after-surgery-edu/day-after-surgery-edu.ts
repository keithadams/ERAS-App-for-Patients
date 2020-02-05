import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'navigation-details-day-after',
  templateUrl: 'navigation-details-day-after.html'
})
export class NavigationDetailsDayAfterPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
  selector: 'day-after-surgery-edu',
  templateUrl: 'day-after-surgery-edu.html'
})
export class DayAfterSurgeryEdu {
  pages;
  items;

  constructor(public navCtrl: NavController) {

    this.pages = [
      {
        'title': 'Post-Anesthesia Care Unit (PACU)',
        'icon': 'book',
        'color': '#0066FF',
        'sections' : [
          {
            'layout' : 'image-above-text-below',
            'description': 'You will wake up in the recovery room where'
            + ' you will be monitored until you are alert and your vital signs are stable.'
            + ' Patients coming out of anesthesia react in di erent ways. You may be sleepy,'
            + ' have a sore throat, or feel sick to your stomach. These reactions are normal and will go away as the'
            + ' anesthesia wears off. The length of time you will spend in the recovery area will vary because some individuals take'
            + ' longer than others to wake up after anesthesia. You may be receiving oxygen through your nose as'
            + ' you wake up. You may also have a urinary catheter, or surgical drains in your abdomen from your procedure.'
            + ' You will be reunited with your loved ones when you go to your assigned hospital room.',
            'image': 'assets/img/Aftersurgeryscreen1.png'
          }
        ]
      },
      {
        'title': 'Pain Management',
        'icon': 'book',
        'color': '#787878',
        'sections' : [
          {
            'layout' : 'text-only',
            'description': 'It is common for people to feel pain and/or abdominal discomfort after waking up from anesthesia.'
            + ' This is expected and we will work with you to make sure your pain is well-controlled.'
            + ' It is important to use the right medication for the severity of pain you are feeling.'
            + ' To assess your pain level, your nurse or providers will ask you to rank your pain'
            + ' on a scale from 1-10, as shown below:'
          },
          {
            'layout' : 'image-only',
            'image': 'assets/img/Aftersurgeryscreen2.png'

          }
        ]
      }
    ];

    this.items = [
      {
        'title': 'Post-Anesthesia Care Unit (PACU)',
        'icon': 'book',
        'color': '#0066FF',
        'image_1': 'assets/img/Aftersurgeryscreen1.png',
        'description': 'You will wake up in the recovery room where'
          + ' you will be monitored until you are alert and your vital signs are stable.'
          + ' Patients coming out of anesthesia react in di erent ways. You may be sleepy,'
          + ' have a sore throat, or feel sick to your stomach. These reactions are normal and will go away as the'
          + ' anesthesia wears off. The length of time you will spend in the recovery area will vary because some individuals take'
          + ' longer than others to wake up after anesthesia. You may be receiving oxygen through your nose as'
          + ' you wake up. You may also have a urinary catheter, or surgical drains in your abdomen from your procedure.'
          + ' You will be reunited with your loved ones when you go to your assigned hospital room.'
      },
      {
        'title': 'Pain Management',
        'icon': 'book',
        'description_3': 'It is common for people to feel pain and/or abdominal discomfort after waking up from anesthesia.'
          + ' This is expected and we will work with you to make sure your pain is well-controlled.'
          + ' It is important to use the right medication for the severity of pain you are feeling.'
          + ' To assess your pain level, your nurse or providers will ask you to rank your pain'
          + ' on a scale from 1-10, as shown below:',
        'color': '#787878',
        'image_2': 'assets/img/Aftersurgeryscreen2.png',
  
      },
    ]
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(NavigationDetailsDayAfterPage, { item: item });
  }

}