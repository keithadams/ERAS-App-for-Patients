import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'navigation-details-recovery-timeline',
  templateUrl: 'navigation-details-recovery-timeline.html'
})
export class NavigationDetailsRecoveryTimelinePage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
  selector: 'recovery-timeline-edu',
  templateUrl: 'recovery-timeline-edu.html'
})

export class RecoveryTimelineEdu {
  pages;

  constructor(public navCtrl: NavController) {
    this.pages = [
      {
        'title' : 'Enhanced Recovery After Surgery (ERAS)',
        'icon' : 'book',
        'color': '#0066FF',
        'sections' : [
          {
            'layout' : 'text-only',
            'description': 'No Driving'
          },
          {
            'layout' : 'text-only',
            'description': 'Avoid Lifting greater than 10 lbs. (about 1 gallon)'
          },
          {
            'layout' : 'text-only',
            'description': 'Walk 4 times per day (20 minutes each time)'
          },
          {
            'layout' : 'text-only',
            'description': 'Get out of bed for at least 6 hours a day'
          },
          {
            'layout' : 'text-only',
            'description': 'Walk 4 times per day (20 minutes each time)'
          },
          {
            'layout' : 'text-only',
            'description': 'Takes naps and rest as necessary'
          },
          {
            'layout' : 'text-only',
            'description': 'Drink at least 6 glasses of water a day'
          },
          {
            'layout' : 'text-only',
            'description': 'Eat 4-6 small meals a day'
          },
          {
            'layout' : 'text-only',
            'description': 'Bathe daily'
          },
          {
            'layout' : 'text-only',
            'description': 'Perform wound care daily'
          },
          {
            'layout' : 'text-only',
            'description': 'Use Medication Checklist to make sure you take all medications'
            + ' at the right time. If you have questions, please call 404-686-1000.'
          }
        ]
      },
      {
        'title': '(Week 2) Typical Recovery Timeline',
        'icon': 'book',
        'color': '#787878',
        'sections' : [
          {
            'layout' : 'text-only',
            'description': 'Staples are removed'
          },
          {
            'layout' : 'text-only',
            'description': 'Reduced need for narcotic pain medication'
          },
          {
            'layout' : 'text-only',
            'description': 'Walk 4 times per day'
          },
          {
            'layout' : 'text-only',
            'description': 'Avoid lifting greater than 10 lbs. (about 1 gallon)'
          },
          {
            'layout' : 'text-only',
            'description': 'You may be ready to drive if you are no longer taking narcotic pain medications'
          },
          {
            'layout' : 'text-only',
            'description': 'Drink at least 6 glasses of water a day'
          },
          {
            'layout' : 'text-only',
            'description': 'Eat 4-6 small meals a day'
          },
          {
            'layout' : 'text-only',
            'description': 'Bathe daily'
          },
          {
            'layout' : 'text-only',
            'description': 'Perform wound care daily'
          }
        ]
      },
      {
        'title': '(1 Month After Surgery) Typical Recovery Timeline',
        'icon': 'book',
        'color': '#0066FF',
        'sections' : [
          {
            'layout' : 'text-only',
            'description': 'Bring logbook to post-operative appointment'
          },
          {
            'layout' : 'text-only',
            'description': 'You should no longer need pain medication'
          },
          {
            'layout' : 'text-only',
            'description': 'You may be ready to drive if you are no longer taking narcotic pain medications'
          },
          {
            'layout' : 'text-only',
            'description': 'Return to work with approval'
          },
          {
            'layout' : 'text-only',
            'description': 'Appetite should be improving, and you should be regaining any lost weight'
          },
          {
            'layout' : 'text-only',
            'description': 'You may continue to increase activity as tolerated'
          },
          {
            'layout' : 'text-only',
            'description': 'Do not lift more than 10 lbs. for 2 more weeks'
          }
        ]
      },
      {
        'title': '(3 Month After Surgery) Typical Recovery Timeline',
        'icon': 'book',
        'color': '#787878',
        'sections' : [
          {
            'layout' : 'text-only',
            'description': 'You will likely have returned to work and resumed regular activities'
          },
          {
           
           'layout' : 'text-only',
            'description': 'You will continue to get stronger and your appetite will improve'
          },
          {
           
           'layout' : 'text-only',
            'description': 'Ostomy patients may need to re-evaluate pouching due to changes in body shape and activity levels'
          }
        ]
      }
    ];
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(NavigationDetailsRecoveryTimelinePage, { item: item });
  }
}
