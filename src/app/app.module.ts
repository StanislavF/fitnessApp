import { MealPlanModalService } from './content-holder/meal-plan/meal-plan-modal.service';
import { BrowserModule} from '@angular/platform-browser';
import { NgModule, Pipe, ViewChild} from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
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
import { ContentComponent } from './content-holder/content.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './content-holder/profile/profile.component';
import { NavigService } from './shared/services/navig-service.service';
import { TrainProgramComponent } from './content-holder/train-program/train-program.component';
import { TrainingDayComponent } from './content-holder/train-program/training-day/training-day.component';
import { TrainingRowComponent } from './content-holder/train-program/training-day/training-row/training-row.component';
import { HomeComponent } from './content-holder/home/home.component';
import { MealPlanComponent } from './content-holder/meal-plan/meal-plan.component';
import { SingleMealComponent } from './content-holder/meal-plan/single-meal/single-meal.component';
import { MealRowComponent } from './content-holder/meal-plan/single-meal/meal-row/meal-row.component';
import { MyClientsComponent } from './content-holder/my-clients/my-clients.component';
import { MyTrainersComponent } from './content-holder/my-trainers/my-trainers.component';
import { ModalSingleMealComponent } from './content-holder/meal-plan/modal-single-meal/modal-single-meal.component';
import { ModalSingleMealRowComponent } from './content-holder/meal-plan/modal-single-meal/modal-single-meal-row/modal-single-meal-row.component';
import { ModalTrainingDayComponent } from './content-holder/train-program/modal-training-day/modal-training-day.component';
import { ModalTrainingRowComponent } from './content-holder/train-program/modal-training-day/modal-training-row/modal-training-row.component';
import { TrainProgramModalService } from './content-holder/train-program/train-program-modal.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterInComponent,
    ContentComponent,
    LogInComponent,
    ProfileComponent,
    TrainProgramComponent,
    TrainingDayComponent,
    TrainingRowComponent,
    HomeComponent,
    MealPlanComponent,
    SingleMealComponent,
    MealRowComponent,
    MyClientsComponent,
    MyTrainersComponent,
    ModalSingleMealComponent,
    ModalSingleMealRowComponent,
    ModalTrainingDayComponent,
    ModalTrainingRowComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    ToggleButtonModule,
    ModalModule.forRoot()
  ],
  providers: [
    NavigService,
    MealPlanModalService,
    TrainProgramModalService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalSingleMealComponent,
    ModalSingleMealRowComponent,
    ModalTrainingRowComponent,
    ModalTrainingDayComponent
  ]
})
export class AppModule { }
