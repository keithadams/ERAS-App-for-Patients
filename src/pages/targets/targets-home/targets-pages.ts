export class TargetsPages {
  title;
  cards;
  profile;

  constructor(profile) {
    this.profile = profile;

    console.log(this.profile.diabetic);

    if (this.profile.targetPhase == 'home-recovery-targets' ) {
      this.title = "Home Recovery Targets";
      this.cards = this.getHomeRecoveryCards();
    }
    else if (this.profile.targetPhase == 'day-before-surgery-targets' ) {
      this.title = "Day Before Surgery";
      this.cards = this.getDayBeforeSurgeryCards();
    }
    else if (this.profile.targetPhase == 'day-of-surgery-targets' ) {
      this.title = "Day of Surgery Targets";
      this.cards = this.getDayOfSurgeryCards();
    }
    else if (this.profile.targetPhase == 'in-hospital-targets' ) {
      this.title = "In-Hospital Targets";
      this.cards = this.getInHospitalCards();
    }
    else if (this.profile.targetPhase == 'pre-surgery-targets' ) {
      this.title = "Pre-Surgery Targets";
      this.cards = this.getPreSurgeryCards();
    }
  }

  getHomeRecoveryCards() {
    var c = [
      {
          "title" : "Meals",
          "type" : "checkmark",
          "question" : "Eat 4-6 small meals",
          "answers" : ["Meal 1","Meal 2","Meal 3","Meal 4","Meal 5","Meal 6"],
          "selectedValue": [false,false,false,false,false,false],
          "touched" : false,
          "hidden" : false,
          "image" : "assets/img/39.jpg"
      },
      {
          "title" : "Chew Gum",
          "type" : "radio",
          "question" : "Did you chew gum today?",
          "answers" : ["Yes","No"],
          "selectedValue" : undefined,
          "touched" : false,
          "hidden" : false
      },
      {
          "title" : "Hand Hygiene",
          "type" : "radio",
          "question" : "Did you wash your hands thoroughly today?",
          "answers" : ["Yes","No"],
          "selectedValue" : undefined,
          "touched" : false,
          "hidden" : false
      },
      {
          "title" : "Visitor's Hygiene",
          "type" : "radio",
          "question" : "Did your visitors wash their hands thoroughly?",
          "answers" : ["Yes","No"],
          "selectedValue" : undefined,
          "touched" : false,
          "hidden" : false
      },
      {
          "title" : "Walking",
          "type" : "radio",
          "question" : "Did you get out of bed and walk today?",
          "answers" : ["Yes","No"],
          "selectedValue" : undefined,
          "touched" : false,
          "hidden" : false,
          "image" : "assets/img/06.jpg"

      }
    ]
    return c;
  }


  getDayBeforeSurgeryCards() {
    var c = [
      {
        "title" : "Time of Surgery",
        "type" : "time",
        "question" : "What time is your surgery tomorrow?",
        "label" : "Time",
        "touched" : false,
        "hidden" : false,
        "selectedValue" : this.profile.surgeryTime,
        "image" : "assets/img/21.jpg"
      }
    ];
    return c;
  }

  getDayOfSurgeryCards() {
    var c = [
      {
        "title" : "Sports Drink",
        "type" : "information",
        "question" : "Drink 12 oz. of a Sports Drink, such as a Gatorade or Powerade, up to 3 hours before your procedure time.",
        "image" : "assets/img/20.jpg",
        "touched" : false,
        "hidden" : this.profile.diabetic
      },
      {
        "title" : "Sports Drink",
        "type" : "information",
        "question" : "Drink 12 oz. of a low-sugar Sports Drink, such as a Gatorade or Powerade, up to 3 hours before your procedure time.",
        "image" : "assets/img/20.jpg",
        "touched" : false,
        "hidden" : !this.profile.diabetic
      },
      {
        "title" : "Pre-Surgical Bathing",
        "type" : "information",
        "question" : "Pre-shower with an antibacterial soap the morning of your surgery. Please use the soap provided by the anesthesiology preoperative clinic for this bathing." ,
        "image" : "assets/img/19.jpg",
        "image_width": "50%",
        "touched" : false,
        "hidden" : false
      },
      {
        "title" : "Bring Items to Hospital",
        "type" : "checkmark",
        "question" : "Bring the following items to the hospital with you on your day of surgery.",
        "answers" : ["Your phone or tablet so you can access this app","Incentive Spirometer","Loose-fitting, comfortable clothes","1-3 packs of chewing gum","Glasses, contacts, or hearing aids if you use them","Socks, slippers, and your own pillow for extra comfort"],
        "selectedValue": [false,false,false,false,false,false],
        "touched" : false,
        "hidden" : false
      }
    ]
    return c;
  }

  getInHospitalCards() {
    var c = [
      {
        "title" : "Meals",
        "type" : "checkmark",
        "question" : "Eat 4-6 small meals",
        "answers" : ["Meal 1","Meal 2","Meal 3","Meal 4","Meal 5","Meal 6"],
        "selectedValue": [false,false,false,false,false,false],
        "touched" : false,
        "hidden" : false,
        "image" : "assets/img/39.jpg"
      },
      {
        "title" : "Chew Gum",
        "type" : "radio",
        "question" : "Did you chew gum today?",
        "answers" : ["Yes","No"],
        "selectedValue" : undefined,
        "touched" : false,
        "hidden" : false
      },
      {
        "title" : "Hand Hygiene",
        "type" : "radio",
        "question" : "Did you wash your hands thoroughly today?",
        "answers" : ["Yes","No"],
        "selectedValue" : undefined,
        "touched" : false,
        "hidden" : false
      },
      {
        "title" : "Visitor's Hygiene",
        "type" : "radio",
        "question" : "Did your visitors wash their hands thoroughly?",
        "answers" : ["Yes","No"],
        "selectedValue" : undefined,
        "touched" : false,
        "hidden" : false
      },
      {
        "title" : "Walking",
        "type" : "radio",
        "question" : "Did you get out of bed and walk today?",
        "answers" : ["Yes","No"],
        "selectedValue" : undefined,
        "touched" : false,
        "hidden" : false,
        "image" : "assets/img/06.jpg"

      }
    ]
    return c;
  }

  getPreSurgeryCards() {
    var c = [
      {
        "title" : "Exercise",
        "type" : "radio",
        "question" : "Did you get at least 30 minutes of exercise today?",
        "answers" : ["Yes","No"],
        "selectedValue" : undefined,
        "touched" : false,
        "hidden" : false,
        "image" : "assets/img/06.jpg"
      },
      {
        "title" : "Videos",
        "type" : "radio",
        "question" : "Did you watch the 'Enhanced Recovery After Surgery' Video?",
        "answers" : ["Yes","No"],
        "selectedValue" : undefined,
        "touched" : false,
        "hidden" : this.profile.watchedVideos,
        "image" : "assets/img/07.jpg"
      }
    ]
    return c;
  }

}