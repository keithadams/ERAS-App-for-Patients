import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { SetupName } from '../setup/setup-name/setup-name';
import { EducationHome} from '../education/education-home/education-home';
import { TargetsHome } from '../targets/targets-home/targets-home';
import { Contact } from '../contact/contact';
import { Videos } from '../videos/videos';

import { FhirService } from '../../providers/fhir-service'; //todo remove

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FhirService]
})
export class HomePage {

  response;
  constructor(public navCtrl: NavController, public fhirService: FhirService) { // todo remove fhirservice
    
  }

  navToSetup() {
    this.navCtrl.setRoot(SetupName);
  }

  navToTargets() {
    this.navCtrl.push(TargetsHome);
  }

  navToEducationPage() {
    this.navCtrl.push(EducationHome);
  }

  navToContactPage() {
    this.navCtrl.push(Contact);
  }

  navToVideosPage() {
    this.navCtrl.push(Videos);
  }
  
  

}
