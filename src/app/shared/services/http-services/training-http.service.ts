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
      headers: { 'Content-Type': 'application/json' },
      params: params
    });
  }

  createComment(comment: string, exerciseRowId: number, clientUsername: string) {

    let params = new HttpParams()
      .set("comment", comment)
      .set("exerciseRowId", String(exerciseRowId))
      .set("clientUsername", clientUsername);

    return this.http.post(this.host + "/training-day/create-comment", params)
  }

  updateSingleMeal(trainingDay: TrainingDay, oldTrainingDayId: number,
    clientUsername: string, trainerUsername: string) {

    let body = JSON.stringify(trainingDay);

    let params = new HttpParams()
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername)
      .set("oldTrainingDayId", String(oldTrainingDayId));

    return this.http.put(this.host + "/training-day/update", body, {
      headers: { 'Content-Type': 'application/json' },
      params: params
    });
  }

  deleteSingleMeal(trainingDayId: number) {

    let params = new HttpParams()
      .set("trainingDayId", String(trainingDayId));

    return this.http.delete(this.host + "/training-day/delete", { params })
  }

}
