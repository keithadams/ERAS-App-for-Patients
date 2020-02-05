import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TargetsPages } from '../targets-home/targets-pages';
import { FhirService } from '../../../providers/fhir-service'; //todo remove



@Component({
  selector: 'page-targets-home',
  templateUrl: 'targets-home.html',
  providers: [FhirService] // todo remove fhir service
})
export class TargetsHome {

  title = 'Targets';
  cards;
  targetsHistory;
  targetPhase;
  surgeryDate;
  surgeryTime;
  watchedVideos;
  diabetic;

  constructor(public navCtrl: NavController, public storage: Storage, public fhirService : FhirService) { // todo remove fhir service
    this.retrieveTargetsHistory();
  }

  ionViewDidLoad() {
    console.log('Hello Targets Page');
  }

  ionViewWillLeave() {
    this.saveTargetsHistory();
    this.publishQuestionnaire(); // todo remove fhir functionality
  }

  hideCard(card) {
    card.hidden = true;
    card.touched = true;
    this.saveTargetsHistory();
  }

  unhideCards() {
    for (var card of this.cards) {
      if (card.touched){
        card.hidden = false;
      }
    }
    this.saveTargetsHistory();
  }

  saveTargetsHistory() {
    this.storage.set('targets_history',this.targetsHistory);
    console.log('saving');
    // console.log(this.targetsHistory);
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

  setTargetPhase(yyyy_mm_dd: string) {
    var surgery_date = this.convert_yyyy_mm_dd_to_date(yyyy_mm_dd);
    var day_before_surgery_date = this.incrementDate(surgery_date,-1);
    var day_after_surgery_date = this.incrementDate(surgery_date,+1);
    var week_after_surgery_date = this.incrementDate(surgery_date,+7);
    var today = new Date();

    if (today >= surgery_date && today < day_after_surgery_date) {
      console.log("day-of-surgery-targets");
      this.targetPhase = "day-of-surgery-targets";
    }
    else if (today >= day_before_surgery_date && today < surgery_date) {
      console.log("day-before-surgery-targets");
      this.targetPhase = "day-before-surgery-targets";
    }
    else if (today < surgery_date ){
      console.log("pre-surgery-targets");
      this.targetPhase = "pre-surgery-targets";
    }
    else if (today >= day_after_surgery_date && today < week_after_surgery_date){
      console.log("in-hospital-targets");
      this.targetPhase = "in-hospital-targets";
    }
    else{
      console.log("home-recovery-targets");
      this.targetPhase = "home-recovery-targets";
    }

  }

  retrieveTargetsHistory() {

    this.storage.get('profile_diabetic').then((diabetic_yn) => {
      this.diabetic = diabetic_yn == 'Yes';

      this.storage.get('profile_watched_videos').then((watched) => {
        this.watchedVideos = watched;
        
        this.storage.get('profile_surgery_time').then((time) => {
          this.surgeryTime = time;

          this.storage.get('profile_surgery_date').then((date) => {
            console.log("profile surgery date ",date);
            this.surgeryDate = date;
            this.setTargetPhase(this.surgeryDate);

            
            // get stored responses
            this.storage.get('targets_history').then((val) => {
              this.targetsHistory = val;
              var today = this.getToday();

              var profile ={
                targetPhase: this.targetPhase,
                surgeryDate: this.surgeryDate,
                surgeryTime: this.surgeryTime,
                watchedVideos: this.watchedVideos,
                diabetic: this.diabetic
              }

              var pageGen = new TargetsPages(profile);

              // if responses in progress and surgery date hasn't changed today, then load previous reponse
              if (this.targetsHistory.hasOwnProperty(today) && this.targetsHistory[today].targetPhase == this.targetPhase) {
                console.log("Today's History Found.");
                console.log("Today's History matches current phase.");
                this.cards = this.targetsHistory[today].cards;
                this.title = this.targetsHistory[today].title;
              }

              // if responses in progress and surgery date has changed, use defaults
              else if (this.targetsHistory.hasOwnProperty(today) && this.targetsHistory[today].targetPhase != this.targetPhase) {
                console.log("Today's History Found.");
                console.log("Today's History does NOT match current phase.");
                this.targetsHistory[today] = {title: pageGen.title,targetPhase: pageGen.profile.targetPhase ,cards: pageGen.cards};
                this.cards = this.targetsHistory[today].cards;
                this.title = this.targetsHistory[today].title;

              }
              // if first time opening targets today, load defaults
              else {
                console.log("Today's History NOT Found.");
                this.targetsHistory[today] = {title: pageGen.title,targetPhase: pageGen.profile.targetPhase ,cards: pageGen.cards};
                this.cards = this.targetsHistory[today].cards;
                this.title = this.targetsHistory[today].title;
              }

              this.saveTargetsHistory();
            })
          })
        })
      })
    })
  }

  change(event,card,index=0) {
    card.touched = true;

    if (card.type == 'checkmark') {
      card.selectedValue[index] = event._checked;
    }

    if (card.title == 'Time of Surgery') {
      this.storage.set('profile_surgery_time',card.selectedValue);
    }

    if (card.title == 'Videos') {
      
      this.storage.set('profile_watched_videos',card.selectedValue == 'Yes');
    }

    console.log('Saving targetsHistory');
    this.saveTargetsHistory();
  }

  publishQuestionnaire() { // todo remove fhir functionality
    let history = this.targetsHistory[this.getToday()];
    let title = 'ERAS - ' + history.title;
    let questions = [];
    let responses = [];
    let d = new Date();
    let date = d.toISOString();

    history.cards.forEach(function (card, i) {
      if (card.type == 'radio') {
        let question = {};
        let response = {};
        question["linkId"] = (i + 1).toString();

        question["text"] = card.question;
        question["type"] = "integer";
        question["option"] = [];

        if (card.touched) {
          response["linkId"] = (i + 1).toString();
          response["answer"] = [];
        }

        card.answers.forEach(function (answer,j) {
          let o = {};
          let r = {};
          o["code"] = (j + 1).toString();
          o["display"] = answer;


          if (card.selectedValue == answer && card.touched) {
            r["valueInteger"] = j + 1;
            response["answer"].push(r);
          }
          question["option"].push(o);
        });

        questions.push(question);
        if (response != {}) {
          responses.push(response);
        }
      }
    });


    // console.log(questions);
    // console.log(responses);

    let baseUrl = "http://52.72.172.54:8080/fhir/baseDstu2";

    this.storage.get("profile_first_name").then( fn => {
      this.storage.get("profile_last_name").then( ln => {
        this.fhirService.getPatientId(fn,ln,baseUrl)
        .then( patient_id => {
          if (patient_id) {
            this.fhirService.publishQuestionnaireWithResponse(patient_id,title,questions,responses,date,baseUrl)
            .then( qr_id => {
              //nothing
            });
          }
          else {
            this.fhirService.createPatient(fn,ln,true,baseUrl)
            .then (patient_id => {
              this.fhirService.publishQuestionnaireWithResponse(patient_id,title,questions,responses,date,baseUrl)
              .then( qr_id => {
                //nothing
              });
            });
          }
        });   
      });
    });
  }



}

