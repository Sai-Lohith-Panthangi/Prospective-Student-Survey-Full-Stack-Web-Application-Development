/* 
Sai Lohith Panthangi - G01389946
Kalaivani Palani - G01455734
Mounaraga Annavaram – G01411743
*/

/* This is an Angular component responsible for handling survey form functionality( Survey_form.component.ts ).
 It includes methods for form validation, submission, and cancellation. It communicates with the backend service to create or update survey forms.   */


import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError } from "rxjs";
import { SurveyForm } from "../Survey_form";
import { SurveyListService } from '../Survey_form.service';

@Component({
  selector: 'app-Survey_form',
  templateUrl: './Survey_form.component.html',
  styleUrls: ['./Survey_form.component.css']
})
export class SurveyFormComponent implements OnInit {

  @Input() surveyData: SurveyForm = new SurveyForm();
  @Input() isUpdate: boolean = false;
  @ViewChild('surveyForm') public surveyForm: NgForm | undefined;
  @ViewChild('successMessage') successMessage!: ElementRef;
  likedMostOptionsValues: string[] = ['Students', 'Location', 'Campus', 'Atmosphere', 'Dorm rooms', 'Sports'];
  @Output() close = new EventEmitter<void>(); 
  formSubmittedSuccessfully: boolean = false;
  private scrollEvent = new BehaviorSubject<boolean>(false);
  scrollEvent$ = this.scrollEvent.asObservable();

  constructor(private formService: SurveyListService, private router: Router) {
  }

  validate_mandatory_fields(value: string | string[]): any {
    if (!value) {
      return {required: 'Required field'};
    }
    return null;
  }

  validateLikedMostOptions() {
    if (this.surveyData.likedMostOptions.length === 0) {
      return {required: 'Required field'};
    }
    return null;
  }

 cancel_feature() {
    // Reset the form fields without making any HTTP requests
    
    if (this.surveyForm) {
      this.surveyForm.resetForm(); // Reset the form
      this.likedMostOptionsValues = ['Students', 'Location', 'Campus', 'Atmosphere', 'Dorm rooms', 'Sports']; // Reset likedMostOptionsValues
      // Uncheck checkboxes associated with likedMostOptions
      this.surveyData.likedMostOptions = [];
    }
    // Emit event to scroll to the top of the screen
    this.scrollEvent.next(true);
    // Emit event to close the form
    this.close.emit();
    this.formSubmittedSuccessfully = false;
  }

  update_liked_most_option(checked: any, option: string) {
    if (checked?.target?.checked) {
      if (!this.surveyData.likedMostOptions.includes(option)) {
        this.surveyData.likedMostOptions.push(option);
      }
    } else {
      const index = this.surveyData.likedMostOptions.indexOf(option);
      if (index !== -1) {
        this.surveyData.likedMostOptions.splice(index, 1);
      }
    }
  }

  submit_disable_feature(event: Event) {
    event.preventDefault();
    if (this.surveyForm && this.surveyForm.valid) {
      this.submitForm(this.surveyData);
    } else {
      console.log("Please fill out all mandatory fields.");
    }
  }

  submitForm(formData: any) {
    console.log(formData);
  
    if (this.isUpdate) {
      this.formService
        .updating_survey_forms(this.surveyData.id, formData)
        .pipe(catchError((error: any) => {
          console.error('Error updating survey', error);
          throw new Error(error);
        }))
        .subscribe((response) => {
          console.log('Survey updated successfully', response);
          // Reset form and other necessary data
          if (this.surveyForm) {
            this.surveyForm.resetForm(); // Reset the form
            this.likedMostOptionsValues = ['Students', 'Location', 'Campus', 'Atmosphere', 'Dorm rooms', 'Sports']; // Reset likedMostOptionsValues
            // Uncheck checkboxes associated with likedMostOptions
            this.surveyData.likedMostOptions = [];
          }
          this.formSubmittedSuccessfully = true;
          // Set focus to success message
          if (this.successMessage) {
            this.successMessage.nativeElement.focus();
          }
          // Emit event to scroll to the top of the screen
          this.scrollEvent.next(true);
          // Emit event to close the form
          this.close.emit();
        });
    } else {
      this.formService
        .creating_survey_forms(formData)
        .pipe(catchError((error: any) => {
          console.error('Error creating survey', error);
          throw new Error(error);
        }))
        .subscribe((response) => {
          console.log('Survey created successfully', response);
          // Reset form and other necessary data
          if (this.surveyForm) {
            this.surveyForm.resetForm(); // Reset the form
            this.likedMostOptionsValues = ['Students', 'Location', 'Campus', 'Atmosphere', 'Dorm rooms', 'Sports']; // Reset likedMostOptionsValues
            // Uncheck checkboxes associated with likedMostOptions
            this.surveyData.likedMostOptions = [];
          }
          this.formSubmittedSuccessfully = true;
          // Set focus to success message
          if (this.successMessage) {
            this.successMessage.nativeElement.focus();
          }
          // Emit event to scroll to the top of the screen
          this.scrollEvent.next(true);
        });
        this.hideSuccessMessage();
    }
  }
  
  clearSuccessMessage() {
    this.formSubmittedSuccessfully = false;
  }

  hideSuccessMessage() {
    setTimeout(() => {
      this.successMessage.nativeElement.style.display = 'none';
    }, 5000); // 5000 milliseconds = 5 seconds
  }

  ngOnInit(): void {
    this.scrollEvent$.subscribe(() => {
      // Scroll to the top of the screen
     window.scrollTo(0, 0);
   });
    console.log(this.surveyData);
  }
}
