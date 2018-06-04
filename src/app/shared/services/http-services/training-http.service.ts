import { ExerciseRow } from './../../models/exercise-row.model';
import { TrainingDay } from './../../models/training-day.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TrainingHttpService {

  private host: string;

  constructor(private http: HttpClient) {
    this.host = "http://localhost:8080";
  }

  getExercises() {
    return this.http.get(this.host + '/training-day/exercises/get', );
  }

  getTrainingDays(date: string, clientUsername: string, trainerUsername: string) {

    let params = new HttpParams()
      .set("date", date)
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername);

    return this.http.get(this.host + '/training-day/get', { params });
  }

  createTrainingDay(trainingDay: TrainingDay, clientUsername: string, trainerUsername: string) {

    let body = JSON.stringify(trainingDay);

    let params = new HttpParams()
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername);

    return this.http.post(this.host + "/training-day/create", body, {
      responseType: "text", 
      headers: { 'Content-Type': 'application/json' },
      params: params
    });
  }

  createComment(comment: string, exerciseRowId: number, clientUsername: string) {

    let params = new HttpParams()
      .set("exerciseRowId", String(exerciseRowId))
      .set("comment", comment)
      .set("clientUsername", clientUsername);

    return this.http.put(this.host + "/training-day/comment/create", null, {
      responseType: "text", 
      params: params
    });
  }

  updateTrainingDay(trainingDay: TrainingDay, oldTrainingDayId: number,
    clientUsername: string, trainerUsername: string) {

    let body = JSON.stringify(trainingDay);

    let params = new HttpParams()
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername)
      .set("oldTrainingDayId", String(oldTrainingDayId));

    return this.http.put(this.host + "/training-day/update", body, {
      responseType: "text", 
      headers: { 'Content-Type': 'application/json' },
      params: params
    });
  }

  deleteTrainingDay(trainingDayId: number, clientUsername: string, trainerUsername: string) {

    let params = new HttpParams()
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername)
      .set("trainingDayId", String(trainingDayId));

    return this.http.delete(this.host + "/training-day/delete", {
      responseType: "text", 
      params
    })
  }

  copyTdFromPrevWeek(date: string, clientUsername: string, trainerUsername: string) {

    let params = new HttpParams()
      .set("date", date)
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername);

    return this.http.post(this.host + '/training-day/copy-prev-week', null, {
      params
    })
  }

  getAllExercises(){

    return this.http.get(this.host + "/training-day/exercises/get");
  }

}
