


/*
Service responsible for managing CRUD operations for survey forms.
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyForm } from './Survey_form';

@Injectable({
  providedIn: 'root'
})
export class SurveyListService {
  private baseURL = 'http://localhost:8080/api/hw-3'; // Base URL for API endpoint

  constructor(private httpClient: HttpClient) {
  }

  // Retrieve list of survey forms
  getSurveyList(): Observable<SurveyForm[]> {
    return this.httpClient.get<SurveyForm[]>(`${this.baseURL}`);
  }

  // Create a new survey form
  creating_survey_forms(surveyForm: SurveyForm): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, surveyForm);
  }

  // Update an existing survey form
  updating_survey_forms(id: string, surveyForm: SurveyForm): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, surveyForm);
  }

  // Delete a survey form by ID
  deleting_survey_forms(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  // Get a specific survey form by ID
  getting_survey_forms(id: string): Observable<SurveyForm> {
    return this.httpClient.get<SurveyForm>(`${this.baseURL}/${id}`);
  }
}
