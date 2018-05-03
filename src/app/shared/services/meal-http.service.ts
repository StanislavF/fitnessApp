import { SingleMeal } from './../models/single-meal.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MealHttpService {

  private host: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.host = "http://localhost:8080";
  }

  getFoods() {
    return this.http.get(this.host + '/api/food', );
  }

  getSingleMeals(date: string, clientUsername: string, trainerUsername: string) {

    let params = new HttpParams()
      .set("date", date)
      .set("clientUsername", clientUsername)
      .set("trainerUsername", trainerUsername);

    return this.http.get(this.host + 'trainingDay/get', { params });
  }

  createSingleMeal(singleMeal: SingleMeal) {

    let body = JSON.stringify(singleMeal);

    return this.http.post(this.host + "singleMeal/create", body, this.httpOptions);
  }

  createComment(comment: string) {

    let params = new HttpParams().set("comment", comment)

    return this.http.post(this.host + "singleMeal/create-comment", params)
  }

  updateSingleMeal(singleMeal: SingleMeal) {
    let body = JSON.stringify(singleMeal);

    return this.http.put(this.host + "singleMeal/update", body, this.httpOptions);
  }

}
