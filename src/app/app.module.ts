import { BrowserModule} from '@angular/platform-browser';
import { NgModule, Pipe, ViewChild} from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { 
  FormGroup, 
  FormControl, 
  ReactiveFormsModule,
  FormsModule,
  Validators,
  FormBuilder
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DropdownModule} from 'primeng/dropdown';

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
import { SearchComponent } from './content-holder/search/search.component';
import { SearchResultRowComponent } from './content-holder/search-result-row/search-result-row.component';
import { ClientRequestsComponent } from './content-holder/client-requests/client-requests.component';
import { DatepickerComponent } from './content-holder/datepicker/datepicker.component';
import { UserHttpService } from './shared/services/http-services/user-http.service';
import { TrainingHttpService } from './shared/services/http-services/training-http.service';
import { MealHttpService } from './shared/services/http-services/meal-http.service';
import { UtilsService } from './shared/services/utils-service.service';
import { MealPlanModalService } from './content-holder/meal-plan/meal-plan-modal.service';
import { SearchContentService } from './content-holder/search-content-service.service';
import { AuthGuard } from './shared/services/auth-guard.service';
import { AccountComponent } from './content-holder/account/account.component';
import { ModalProfileComponent } from './content-holder/profile/modal-profile/modal-profile.component';
import { DatePipe } from '@angular/common';

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
    ModalTrainingRowComponent,
    SearchComponent,
    SearchResultRowComponent,
    ClientRequestsComponent,
    DatepickerComponent,
    AccountComponent,
    ModalProfileComponent
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
    DropdownModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    NavigService,
    MealPlanModalService,
    TrainProgramModalService,
    UtilsService,
    MealHttpService,
    TrainingHttpService,
    UserHttpService,
    SearchContentService,
    AuthGuard,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalSingleMealComponent,
    ModalSingleMealRowComponent,
    ModalTrainingRowComponent,
    ModalTrainingDayComponent,
    ModalProfileComponent
  ]
})
export class AppModule { }
