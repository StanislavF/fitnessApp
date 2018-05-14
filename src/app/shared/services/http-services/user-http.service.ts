import { LogInData } from './../../models/log-in-data.model';
import { User } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { SearchData } from '../../models/search-data.model';


@Injectable()
export class UserHttpService {

  private host: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.host = "http://localhost:8080";
  }

  register(user: User) {

    let body = JSON.stringify(user);

    return this.http.post(this.host + "/register", body, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text'
    });

  }

  logIn(logInData: LogInData) {
    let body = JSON.stringify(logInData);

    return this.http.post(this.host + "/log-in", body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }


  getAllClients(trainerUsername: string) {

    let params = new HttpParams()
      .set("trainerUsername", trainerUsername);

    return this.http.get(this.host + "/get-clients", { params })
  }

  getAllTrainers(clientUsername: string) {

    let params = new HttpParams()
      .set("clientUsername", clientUsername);

    return this.http.get(this.host + "/get-trainers", { params })

  }

  searchUser(searchData: SearchData) {
    let body = JSON.stringify(searchData);

    return this.http.post(this.host + "/search-user", body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  requestUserForTrainer(clientUsername: string, trainerUsername: string) {
    let params = new HttpParams()
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername);

    return this.http.get(this.host + "/request-trainer", {
      params,
      responseType: 'text'
    });
  }

  getClientRequests(trainerUsername: any) {
    let params = new HttpParams()
      .set("trainerUsername", trainerUsername);

    return this.http.get(this.host + "/get-client-requests", { params });
  }

  acceptClientRequest(clientUsername: string, trainerUsername: string) {
    let params = new HttpParams()
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername);

    return this.http.put(this.host + "/accept-client-request", null, {
      responseType: 'text',
      params: params
    });
  }

  rejectClientRequest(clientUsername: string, trainerUsername: string) {
    let params = new HttpParams()
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername);

    return this.http.put(this.host + "/reject-client-request", null, {
      responseType: 'text',
      params: params
    });
  }

  getUserData(username) {
    let params = new HttpParams()
      .set("username", username);

    return this.http.get(this.host + "/get-user-data", { params });
  }

  cancelTrainerClient(clientUsername: string, trainerUsername: string) {
    let params = new HttpParams()
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername);

    return this.http.put(this.host + "/cancel-trainer-cliet", null, {
      responseType: 'text',
      params: params
    });
  }

  getTrainerClientStatus(clientUsername: string, trainerUsername: string) {
    let params = new HttpParams()
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername);

    return this.http.get(this.host + "/get-trainer-cliet-status", {
      responseType: 'text',
      params: params
    });
  }

  deleteClientFromTrainer(clientUsername: string, trainerUsername: string) {
    let params = new HttpParams()
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername);

    return this.http.put(this.host + "/remove-client-from-trainer-visability", null, {
      responseType: 'text',
      params: params
    });
  }

  deleteTrainerFromClient(clientUsername: string, trainerUsername: string) {
    let params = new HttpParams()
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername);

    return this.http.put(this.host + "/remove-trainer-from-client-visability", null, {
      responseType: 'text',
      params: params
    });
  }

  updateUser(user: User) {

    return this.http.put(this.host + "/update-user", user, {
      responseType: 'text',
      headers: { 'Content-Type': 'application/json' }
    });
  }

}
