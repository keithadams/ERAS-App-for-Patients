import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Videos } from '../../videos/videos';

@Component({
  selector: 'navigation-details',
  templateUrl: 'navigation-details.html'
})

export class NavigationDetailsPage {
  item;

  constructor(params: NavParams, public navCtrl: NavController) {
    this.item = params.data.item;
  }


   navToVideosPage() {
    this.navCtrl.push(Videos);
  	}
  
}

@Component({
  selector: 'page-pre-surgery-edu',
  templateUrl: 'pre-surgery-edu.html'
})
export class PreSurgeryEdu {
  pages;

  constructor(public navCtrl: NavController) {
    this.pages = [
      {
        'title' : 'Enhanced Recovery After Surgery (ERAS)',
        'icon' : 'book',
        'color': '#0066FF',
        'sections' : [
          {
            'layout' : 'image-below-text-above',
            'description': 'Thank you for choosing Emory Healthcare for your colorectal surgery.'
            + ' Your education and engagement throughout your surgical experience has been shown to improve outcomes.' 
            + ' At Emory, we have designed a program to give you the best chances of a quick and successful recovery'
            + 'from your surgery. This program for bowel recovery is called Emory’s Enhanced Recovery After Surgery (ERAS) program.',
            'image' : 'assets/img/PresurgeryScreen1.png',
            'image_left' : true
          },
          {
            'layout' : 'text-only',
            'description': 'Patients who participate in enhanced recovery programs recover faster and have better outcomes. '
            + 'You play a large role in the success of your surgery. Your education and engagement in the steps' 
            + ' before and after surgery play a crucial part in avoiding a prolonged hospital stay and complications.' 
            + ' The information contained in this app will help you take the steps necessary to prepare for and recover well from your procedure.'
          }
        ]
      },
      {
        'title': 'What You Can Do to Improve Your Recovery',
        'icon': 'book',
        'color': '#787878 ',
        'class':'',
        'sections' : [
          {
            'layout' : 'image-above-text-below',
            'description': 'Exercise will give you the energy needed to recover faster.'
            + ' Try to exercise for 30 min a day. Having an operation makes the body work'
            + ' as hard as when you exercise. Doing physical activity beforehand will help'
            + ' train you for surgery. If you exercise regularly, keep up the good work!'
            + ' We suggest increasing the intensity and length of your exercise routine as'
            + ' your surgery date approaches.',
            'image' : 'assets/img/PresurgeryScreen2.png',
            'image_left': true
          },
          {
            'layout' : 'text-only',
            'description': 'Many people find that walking with a pedometer is a helpful way'
            + ' to keep track of how far you walked. Activity trackers, such as a Fitbit, may'
            + ' be purchased as well.'
            + ' You likely will be given a pedometer for us to track your walking'
            + ' after surgery. The device that you may receive will need to be returned when you'
            + ' leave the hospital.'
          },
       
          {
            'layout' : 'image-left-text-right',
            'description': 'Videos. Watch the online videos assigned to you by your surgeon.'
            + ' These videos will teach you about some of the information contained in this'
            + ' booklet. Previous patients have said that these videos were easy to watch'
            + ' and helpful to understand the overall process of their procedure and care.',
            'image': 'assets/img/PresurgeryScreen3.png',
            'image_left': true,
            'video_link': true
          },
          {
            'layout' : 'image-below-text-above',
            'description': 'Stop Smoking. If you are a smoker, stop smoking before your surgery'
            + ' Also, avoid smoking throughout your recovery (6-8 weeks). Studies have shown that' 
            + ' people who smoke are 3 times more likely to develop an infection. Please let us know'
            + ' if you would like more information about help quitting smoking.'
            + ' Here are a few references for you to access:'
            + 'www.smokefree.gov'
            + 'National Cancer Institute’s quitline:1-877-44U-QUIT'
            + 'Local quitline: 1-800-QUIT-NOW',
            'image':'assets/img/PresurgeryScreen4.png',
            'image_left': false
          },
          {
            'layout' : 'image-left-text-right',
            'description': 'Nutrition. You are encouraged to stay well hydrated in the days leading up to your surgery.'
            + ' It is important to eat healthy and monitor your blood glucose to help you after surgery.',
            'image': 'assets/img/PresurgeryScreen5a.png',
            'image_left': true
          },
          {
            'layout' : 'image-right-text-left',
            'description': 'Go over your medications with your Colorectal and Anesthesia teams.'
            + 'We may ask you to stop taking certain medications as you get closer to your surgery date.',
            'image': 'assets/img/PresurgeryScreen5b.png',
            'image_left': false
          },
          {
            'layout' : 'image-left-text-right',
            'description': 'Anesthesia. Before you are able to have your procedure,'
            + ' you will be given an appointment with the Anesthesia Pre-operative Clinic (APC).'
            + '·You will be given your specific pre-op instructions on pre-surgical bathing,'
            + ' bowel/dietary prep, and medication instructions.'
            + '·You will receive directions and specific instructions for the day of your surgery.',
            'image': 'assets/img/PresurgeryScreen5c.png',
            'image_left': true
          },
          {
            'layout' : 'image-right-text-left',
            'description': 'Depending on your planned procedure, you may have to do a Bowel Prep.'
            + ' If you have been instructed to use a bowel prep, follow the instructions listed on the inside cover.',
            'image': 'assets/img/PresurgeryScreen5d.png',
            'image_left': false
          },
          {
            'layout' : 'image-left-text-right',
            'description': 'Lung Health. You will receive a device called an incentive spirometer.'
            + 'It will help you strengthen your lungs after surgery. The goal is to practice taking'
            + ' slow deep breaths and holding your deep breaths in for a few seconds before exhaling slowly.',
            'image': 'assets/img/PresurgeryScreen6a.png',
            'image_left': true
          },
          {
            'layout' : 'image-right-text-left',
            'description': 'Diabetes and Blood Sugar (glucose control). We will monitor your blood sugar'
            + ' even though you may not have a history of diabetes or high blood sugars. This is to make'
            + ' sure your blood sugar is not elevated at the time of surgery. High blood sugars a ect'
            + ' your body’s ability to  ght infection and slows healing. Please let us know if you would'
            + ' like to see a diabetes educator.',
            'image': 'assets/img/PresurgeryScreen6b.png',
            'image_left': false
          },
          {
            'layout' : 'image-left-text-right',
            'description': 'Support. The time around surgery can be a very stressful time. Decrease the'
            + ' stress by preparing in advance and having family and friend support around the time of surgery.'
            + ' In addition, prepare by having clean clothes, stocking your pantry and refrigerator, and having'
            + ' activities to occupy you as you recover.',
            'image': 'assets/img/PresurgeryScreen6c.png',
            'image_left': true
          },
          {
            'layout' : 'image-right-text-left',
            'description': 'Pain. It is important to talk to your surgeon about ways to control pain after surgery.'
            + ' We will try to avoid narcotic pain medication (opiates) because they can slow down your bowel recovery'
            + ' and make you drowsy. Instead, you will be given other non-narcotic medications.',
            'image': 'assets/img/PresurgeryScreen6d.png',
            'image_left': false
          }
        ]
      },
      {
        'title': 'Taking Your Medicines the Morning of Your Surgery',
        'icon': 'book',
        'color': '#0066FF',
        'sections' : [
          {
            'layout' : 'text-only',
            'description': 'An anesthesiologist is a doctor who provides care to patients during surgery. Before your visit to'
            + ' the anesthesia preoperative clinic, your medicines will be reviewed by one of our anesthesiologists. The'
            + ' anesthesiologist asks that you follow these instructions for taking your medicines on the morning of'
            + ' surgery. This will give you the best and safest care for your planned procedure.'
          },
          {
            'layout' : 'image-left-text-right',
            'description': 'Pre-Surgical Bathing: Shower with an antibacterial soap the morning of your surgery. Please use the soap'
            + 'provided by the anesthesiology preoperative clinic for this bathing.',
            'image': 'assets/img/PresurgeryScreen7.png',
            'image_left': true
          }
        ]
      },
      {
        'title': 'Clear Liquid Diet',
        'icon': 'book',
        'color': '#787878 ',
        'sections' : [
          {
            'layout' : 'text-only',
            'description': 'Only day prior to surgery date, your diet should consist of ONLY Clear Liquids.'
            + ' Check with your nurse at your anesthesia appointment to see if you should'
          + ' follow a clear liquid diet after midnight.'
          },
       
          {
            'layout' : 'image-left-text-right',
            'description': 'If instructed by Anesthesia, drink 12 oz of Sports Drink, such as Gatorade'
            + ' or Powerade, up to 3 hours before your procedure time. If you have diabetes, use a low-sugar Sports Drink.',
            'image': 'assets/img/PresurgeryScreen9.png',
            'image_left': true
          }
        ]
      }
    ]

  }




  openNavDetailsPage(item) {
    this.navCtrl.push(NavigationDetailsPage, { item: item });
  }


  

}

