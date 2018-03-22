import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterInComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
 
const routes: Routes = [
{ path: '', redirectTo: 'log-in', pathMatch: 'full' },
{ path: 'log-in', component: LogInComponent },
{ path: 'register', component: RegisterInComponent },
{ 
  path: 'home', 
  component: HomeComponent
}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}