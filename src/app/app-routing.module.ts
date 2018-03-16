import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [
  // { path: '', redirectTo: '/personal-information', pathMatch: 'full' },
  // { path: 'personal-information', component: PersonalInformationComponent },
  // { path: 'work', component: WorkComponent },
  // { path: 'technologies', component: TechnologiesComponent},
  // { path: 'hobbies', component: HobbiesComponent},
  // { path: 'education', component: EducationComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}