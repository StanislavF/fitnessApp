import { HomeComponent } from './content-holder/home/home.component';
import { TrainProgramComponent } from './content-holder/train-program/train-program.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterInComponent } from './register/register.component';
import { ContentComponent } from './content-holder/content.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './content-holder/profile/profile.component';
 
const routes: Routes = [
{ path: '', redirectTo: 'log-in', pathMatch: 'full' },
{ path: 'log-in', component: LogInComponent },
{ path: 'register', component: RegisterInComponent },
{ 
  path: 'app', 
  component: ContentComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'account/profile', component: ProfileComponent },
    { path: 'my-trainers', component: TrainProgramComponent },
    { path: 'account', redirectTo: 'account/profile', pathMatch: 'full' }
  ]

},

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}