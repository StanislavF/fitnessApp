import { SearchComponent } from './content-holder/search/search.component';
import { MealPlanComponent } from './content-holder/meal-plan/meal-plan.component';
import { HomeComponent } from './content-holder/home/home.component';
import { TrainProgramComponent } from './content-holder/train-program/train-program.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterInComponent } from './register/register.component';
import { ContentComponent } from './content-holder/content.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './content-holder/profile/profile.component';
import { MyTrainersComponent } from './content-holder/my-trainers/my-trainers.component';
import { MyClientsComponent } from './content-holder/my-clients/my-clients.component';
 
const routes: Routes = [
{ path: '', redirectTo: 'log-in', pathMatch: 'full' },
{ path: 'log-in', component: LogInComponent },
{ path: 'register', component: RegisterInComponent },
{ 
  path: 'app', 
  component: ContentComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'account', redirectTo: 'account/profile', pathMatch: 'full' },
    { path: 'account/profile', component: ProfileComponent },
    { path: 'my-trainers', component: MyTrainersComponent },
    { path: 'my-trainers/training-program', component: TrainProgramComponent },
    { path: 'my-trainers/meal-plan', component: MealPlanComponent },
    { path: 'my-trainers/profile', component: ProfileComponent },
    { path: 'my-clients', component: MyClientsComponent },
    { path: 'my-clients/training-program', component: TrainProgramComponent },
    { path: 'my-clients/meal-plan', component: MealPlanComponent },
    { path: 'my-clients/profile', component: ProfileComponent },
    { path: 'search', component: SearchComponent }
  ]

},

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}