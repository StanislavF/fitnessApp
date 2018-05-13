import { SingleMeal } from './../../models/single-meal.model';
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

    return this.http.get(this.host + '/single-meal/get', { params });
  }

  createSingleMeal(singleMeal: SingleMeal, clientUsername: string, trainerUsername: string) {

    let body = JSON.stringify(singleMeal);

    let params = new HttpParams()
    .set("clientUsername", clientUsername)
    .set("trainerUsername", trainerUsername);

    return this.http.post(this.host + "/single-meal/create", body, {
      responseType: "text",       
      headers: { 'Content-Type': 'application/json' },
      params: params
    });
  }

  createComment(comment: string, foodRowId: number, clientUsername: string) {

    let params = new HttpParams()
      .set("comment", comment)
      .set("foodRowId", String(foodRowId))
      .set("clientUsername", clientUsername);

      return this.http.put(this.host + "/single-meal/comment/create", null, {
        responseType: "text", 
        params: params
      });
  }

  updateSingleMeal(singleMeal: SingleMeal, oldSingleMealId:number, clientUsername: string, trainerUsername: string) {
    let body = JSON.stringify(singleMeal);

    let params = new HttpParams()
    .set("clientUsername", clientUsername)
    .set("trainerUsername", trainerUsername)
    .set("oldSingleMealId", String(oldSingleMealId));


    return this.http.put(this.host + "/single-meal/update", body,  {
      responseType: "text",       
      headers: { 'Content-Type': 'application/json' },
      params: params
    });
  }

  deleteSingleMeal(singleMealId: number, clientUsername: string, trainerUsername: string){
    
    let params = new HttpParams()
    .set("clientUsername", clientUsername)
    .set("trainerUsername", trainerUsername)
    .set("singleMealId", String(singleMealId));

    return this.http.delete(this.host + "/single-meal/delete", {
      responseType: "text", 
      params
    })
  }

}
