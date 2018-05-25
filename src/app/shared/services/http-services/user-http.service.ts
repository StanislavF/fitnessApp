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

  updateUser(user: User, image: File) {
    let formData = new FormData();

    formData.append("user", JSON.stringify(user));
    if (image != undefined) {
      formData.append("image", image);
    } else {
      formData.append("image", null, null);
    }

    return this.http.post(this.host + "/update-user", formData, {
      responseType: 'text',
    });
  }

  updateUserPassword(username: string, oldPassword: string, newPassword: string) {

    let params = new HttpParams()
      .set("username", username)
      .set("oldPassword", oldPassword)
      .set("newPassword", newPassword);


    return this.http.put(this.host + "/update-user/password", null, {
      responseType: 'text',
      headers: { 'Content-Type': 'application/json' },
      params
    });
  }

  updateUserEmail(username: string, password: string, email: string) {

    let params = new HttpParams()
      .set("username", username)
      .set("password", password)
      .set("email", email);


    return this.http.put(this.host + "/update-user/email", null, {
      responseType: 'text',
      headers: { 'Content-Type': 'application/json' },
      params
    });
  }

}
