/* 
Sai Lohith Panthangi - G01389946
Kalaivani Palani - G01455734
Mounaraga Annavaram – G01411743
*/

/* 
This is an Angular component file (SurveyListComponent) written in TypeScript (All_Survey_List.component.ts).
It interacts with a service (SurveyListService) to fetch, update, and delete survey forms. 
It initializes an array surveyForms to store survey data, manages the visibility of a survey form, 
and provides methods for updating, hiding, and deleting survey entries. 
*/

import { Component, OnInit } from '@angular/core';
import { SurveyForm } from '../Survey_form';
import { SurveyListService } from '../Survey_form.service';

@Component({
  selector: 'app-All_Survey_List',
  templateUrl: './All_Survey_List.component.html',
  styleUrls: ['./All_Survey_List.component.css']
})
export class SurveyListComponent implements OnInit {
  surveyForms: SurveyForm[] = []; // Array to store survey forms
  visibility_form = false; // Flag to control visibility of survey form
  Survey_edit: SurveyForm = new SurveyForm(); // Variable to hold the survey form being edited

  constructor(private surveyListService: SurveyListService) {
  }

  ngOnInit(): void {
    this.getting_survey_forms(); // Fetch initial survey forms when component initializes
  }

  // Method to fetch survey forms from the service
  getting_survey_forms() {
    this.surveyListService.getSurveyList().subscribe(data => {
      this.surveyForms = data; // Assign fetched survey forms to the local array
    });
  }

  // Method to update a survey form
  updating_survey_forms(surveyId: string) {
    this.surveyListService.getting_survey_forms(surveyId).subscribe((data) => {
      this.Survey_edit = data; // Assign the selected survey form to Survey_edit variable
      this.visibility_form = true; // Set visibility_form flag to true to show the form
    });
  }

  // Method to hide the survey form
  invisible_survey_form() {
    this.visibility_form = false; // Set visibility_form flag to false to hide the form
    this.Survey_edit = new SurveyForm(); // Clear the Survey_edit variable
    this.getting_survey_forms(); // Refresh the survey forms list
  }

  // Method to delete a survey form
  deleting_survey_forms(surveyId: string) {
    this.surveyListService.deleting_survey_forms(surveyId).subscribe(() => {
      this.getting_survey_forms(); // Refresh the survey forms list after deletion
    });
  }
}
