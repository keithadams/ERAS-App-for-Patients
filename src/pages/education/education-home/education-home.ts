import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

// import { Question } from '../dev-pages/question/question';  
import { DayOfSurgeryEdu } from '../day-of-surgery-edu/day-of-surgery-edu';
import { PreSurgeryEdu } from '../pre-surgery-edu/pre-surgery-edu';
import { DayAfterSurgeryEdu } from '../day-after-surgery-edu/day-after-surgery-edu';
import { InHospitalEdu } from '../in-hospital-edu/in-hospital-edu';
import { RecoveryTimelineEdu } from '../recovery-timeline-edu/recovery-timeline-edu';

/*
  Generated class for the EducationHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-education-home',
  templateUrl: 'education-home.html'
})
export class EducationHome {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
    
  }


  navToPreSurgeryEduPage() {
    this.navCtrl.push(PreSurgeryEdu);
  }
  navToDayOfSurgeryEduPage() {
    this.navCtrl.push(DayOfSurgeryEdu);
  }

  navToDayAfterSurgeryEduPage() {
    this.navCtrl.push(DayAfterSurgeryEdu);
  }

  navToInHospitalEduPage() {
    this.navCtrl.push(InHospitalEdu);
  }

  navToRecoveryTimelineEduPage() {
    this.navCtrl.push(RecoveryTimelineEdu);
  }

  ionViewDidLoad() {
    console.log('Hello EducationHome Page');
  }

}