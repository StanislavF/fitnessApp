import { TrainingDay } from './../../models/training-day.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TrainingHttpService {

  private host: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.host = "http://localhost:8080";
  }

  getExercises() {
    return this.http.get(this.host + '/exercises', );
  }

  getTrainingDays(date: string, clientUsername: string, trainerUsername: string) {

    let params = new HttpParams()
      .set("date", date)
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername);

    return this.http.get(this.host + 'trainingDay/get', { params });
  }

  createSingleMeal(trainingDay: TrainingDay) {

    let body = JSON.stringify(trainingDay);

    return this.http.post(this.host + "trainingDay/create", body, this.httpOptions);
  }

  createComment(comment: string) {

    let params = new HttpParams().set("comment", comment)

    return this.http.post(this.host + "trainingDay/create-comment", params)
  }

  updateSingleMeal(trainingDay: TrainingDay) {
    let body = JSON.stringify(trainingDay);

    return this.http.put(this.host + "trainingDay/update", body, this.httpOptions);
  }

}
