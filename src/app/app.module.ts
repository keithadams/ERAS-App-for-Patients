import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';

// ../
import { HomePage } from '../pages/home/home';
import { Contact } from '../pages/contact/contact';
import { Videos } from '../pages/videos/videos';

// ./education
import { EducationHome } from '../pages/education/education-home/education-home';
import { DayOfSurgeryEdu } from '../pages/education/day-of-surgery-edu/day-of-surgery-edu';
import { PreSurgeryEdu } from '../pages/education/pre-surgery-edu/pre-surgery-edu';
import { NavigationDetailsPage } from '../pages/education/pre-surgery-edu/pre-surgery-edu';
import { DayAfterSurgeryEdu } from '../pages/education/day-after-surgery-edu/day-after-surgery-edu';
import { InHospitalEdu } from '../pages/education/in-hospital-edu/in-hospital-edu';
import { NavigationDetailsDayOfPage } from '../pages/education/day-of-surgery-edu/day-of-surgery-edu';
import { NavigationDetailsDayAfterPage } from '../pages/education/day-after-surgery-edu/day-after-surgery-edu';
import { NavigationDetailsInHospitalPage } from '../pages/education/in-hospital-edu/in-hospital-edu';
import { NavigationDetailsRecoveryTimelinePage } from '../pages/education/recovery-timeline-edu/recovery-timeline-edu';
import { RecoveryTimelineEdu } from '../pages/education/recovery-timeline-edu/recovery-timeline-edu';


// ./targets
import { TargetsHome } from '../pages/targets/targets-home/targets-home';

// ../setup
import { SetupName } from '../pages/setup/setup-name/setup-name';
import { SetupBirthdate } from '../pages/setup/setup-birthdate/setup-birthdate';
import { SetupDiabetic } from '../pages/setup/setup-diabetic/setup-diabetic';
import { SetupSmoker } from '../pages/setup/setup-smoker/setup-smoker';
import { SetupSurgeryDate } from '../pages/setup/setup-surgery-date/setup-surgery-date';
import { SetupSupport } from '../pages/setup/setup-support/setup-support';
import { SetupSmartphone } from '../pages/setup/setup-smartphone/setup-smartphone';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SetupName,
    SetupBirthdate,
    SetupDiabetic,
    SetupSmoker,
    SetupSurgeryDate,
    SetupSupport,
    SetupSmartphone,
    EducationHome,
    DayOfSurgeryEdu,
    NavigationDetailsDayOfPage,
    PreSurgeryEdu,
    NavigationDetailsPage,
    DayAfterSurgeryEdu,
    NavigationDetailsDayAfterPage,
    InHospitalEdu,
    NavigationDetailsInHospitalPage,
    RecoveryTimelineEdu,
    NavigationDetailsRecoveryTimelinePage,
    Contact,
    Videos,
    TargetsHome

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SetupName,
    SetupBirthdate,
    SetupDiabetic,
    SetupSmoker,
    SetupSurgeryDate,
    SetupSupport,
    SetupSmartphone,
    EducationHome,
    DayOfSurgeryEdu,
    NavigationDetailsDayOfPage,
    PreSurgeryEdu,
    NavigationDetailsPage,
    DayAfterSurgeryEdu,
    NavigationDetailsDayAfterPage, 
    InHospitalEdu,
    NavigationDetailsInHospitalPage,
    RecoveryTimelineEdu,
    NavigationDetailsRecoveryTimelinePage,
    Contact,
    Videos,
    TargetsHome
  ],
  providers: [
    Storage
  ]
})
export class AppModule {}
