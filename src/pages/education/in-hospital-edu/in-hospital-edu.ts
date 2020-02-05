import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'navigation-details-in-hospital',
  templateUrl: 'navigation-details-in-hospital.html'
})
export class NavigationDetailsInHospitalPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
  selector: 'in-hospital-edu',
  templateUrl: 'in-hospital-edu.html'
})
export class InHospitalEdu {
  pages;
  items;

  constructor(public navCtrl: NavController) {
    this.pages = [
      {
        'title': 'Recovery From Surgery',
        'icon': 'book',
        'color': '#0066FF',
        'sections' : [
       
          {
            
            'layout' : 'text-only-title',
            'sub_title' : 'Staying Hydrated',
            'description': 'Your bowel activity will not be normal right after surgery.'
            + ' It usually takes 4-6 weeks to return to normal. Because of this it is'
            + ' important to stay properly hydrated'
          },
        
          {
            'layout' : 'title-text-image',
            'sub_title' : 'Diet',
            'description': 'Following surgery, it is important to add food back slowly,'
            + ' beginning the night after surgery. We will start with a clear liquid diet'
            + ' in the first few hours after surgery, then advance you to a low-fiber diet'
            + ' as you become more able to tolerate food. Eat small meals throughout the day.'
            + ' Chewing gum each day after surgery will also help wake up and stimulate your'
            + ' bowels to begin functioning normally after surgery.',
            'image': 'assets/img/Presurgeryscreen5a.png'
          },
        
          {
            'layout' : 'text-only-title',
            'sub_title' : 'Hand Hygiene',
            'description': 'It is important to keep your hands clean in the days after surgery.'
            + ' Be sure to wash thoroughly with soap every time after you eat or go to the bathroom.'
            + ' Your family and friends should also wash their hands while visiting you.'
          }
        ]
      },
      {
        'title': 'Activities',
        'icon': 'book',
        'color': '#787878',
        'sections' : [
          {
            'layout' : 'text-only',
            'description': 'You will recover better if you begin getting out of bed, and eating'
            + ' or drinking within the first day following surgery. On the following pages, we have'
            + ' included a daily checklist of activities and goals for you to complete while you are'
            + ' recovering in the hospital.'
          },
          {
            'layout' : 'text-only',
            'description': 'Getting up and walking after surgery is very important in decreasing blood clots'
            + ' that can be life threatening.'
          },
          {
            'layout' : 'image-above-text-below',
            'description': 'Early walking after surgery allows the blood to circulate and move through'
              + ' your body and prevents blood from clotting in your blood vessels. In addition, it allows'
              + ' your bowels to wake up sooner from surgery and decreases nausea and vomiting.',
            'image': 'assets/img/Presurgeryscreen2.png'
            
          },
          {
            'layout' : 'image-above-text-below',
            'description': 'Pedometers can be used to encourage walking and allow us to track how much you are walking.',
            'image': 'assets/img/Yourhospitalstay2b.png'
          }
        ]
      }
    ];
    
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(NavigationDetailsInHospitalPage, { item: item });
  }

}