import { ClientRequestsComponent } from './content-holder/client-requests/client-requests.component';
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
import { AuthGuard } from './shared/services/auth-guard.service';
import { AccountComponent } from './content-holder/account/account.component';
 
const routes: Routes = [
{ path: '', redirectTo: 'log-in', pathMatch: 'full' },
{ path: 'log-in', component: LogInComponent },
{ path: 'register', component: RegisterInComponent },
{ 
  path: 'app', 
  component: ContentComponent,
  canActivateChild: [AuthGuard],
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'account', redirectTo: 'account/profile', pathMatch: 'full' },
    { path: 'account/profile', component: AccountComponent },
    { path: 'my-trainers', component: MyTrainersComponent },
    { path: 'my-trainers/training-program', component: TrainProgramComponent },
    { path: 'my-trainers/meal-plan', component: MealPlanComponent },
    { path: 'my-trainers/profile/:username', component: AccountComponent },
    { path: 'my-clients', component: MyClientsComponent },
    { path: 'my-clients/clients-requests', component: ClientRequestsComponent },
    { path: 'my-clients/training-program', component: TrainProgramComponent },
    { path: 'my-clients/meal-plan', component: MealPlanComponent },
    { path: 'my-clients/profile/:username', component: AccountComponent },
    { path: 'search', component: SearchComponent }
  ]

},
{ path: 'app', redirectTo: 'app/home', pathMatch: 'full' },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}