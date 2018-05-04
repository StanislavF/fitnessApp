import { LogInData } from './../../models/log-in-data.model';
import { User } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserHttpService {

  private host: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.host = "http://localhost:8080";
  }

  register(user: User){
     
    let body = JSON.stringify(user);

    return this.http.post(this.host + "register", body, this.httpOptions);

  }

  logIn(logInData: LogInData){
     let body = JSON.stringify(logInData);

     return this.http.post(this.host + "logIn", body, this.httpOptions)
  }


  getAllClients(trainerUsername: string){

    let params = new HttpParams()
    .set("trainerUsername", trainerUsername);

    return this.http.get(this.host + "getClients", {params})
  }

  getAllTrainers(clientUsername: string){

    let params = new HttpParams()
    .set("clientUsername", clientUsername);

    return this.http.get(this.host + "getTrainers", {params})

  }

}
