import { BrowserModule} from '@angular/platform-browser';
import { NgModule, Pipe} from '@angular/core';
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

import { AppComponent } from './app.component';
import { RegisterInComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterInComponent,
    HomeComponent,
    LogInComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
