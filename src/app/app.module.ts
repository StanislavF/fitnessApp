import { BrowserModule} from '@angular/platform-browser';
import { NgModule, Pipe, ViewChild} from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { 
  FormGroup, 
  FormControl, 
  ReactiveFormsModule,
  FormsModule,
  Validators,
  FormBuilder
} from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToggleButtonModule} from 'primeng/togglebutton';

import { AppComponent } from './app.component';
import { RegisterInComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './home/profile/profile.component';
import { NavigService } from './shared/services/navig-service.service';
import { TrainProgramComponent } from './home/train-program/train-program.component';
import { TrainingDayComponent } from './home/train-program/training-day/training-day.component';
import { TrainingRowComponent } from './home/train-program/training-day/training-row/training-row.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterInComponent,
    HomeComponent,
    LogInComponent,
    ProfileComponent,
    TrainProgramComponent,
    TrainingDayComponent,
    TrainingRowComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    ToggleButtonModule
  ],
  providers: [NavigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
