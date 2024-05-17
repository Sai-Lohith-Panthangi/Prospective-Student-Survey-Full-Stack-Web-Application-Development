

/* 
Defines the main module of the Angular application.
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import necessary Angular modules and components
import { NgForOf } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SurveyListComponent } from "./All_Survey_List/All_Survey_List.component";
import { SurveyListService } from "./Survey_form.service";
import { SurveyFormComponent } from "./Survey_form/Survey_form.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from "./welcomePage/homepage.component";

@NgModule({
  // Declare all components used within the module
  declarations: [
    AppComponent,
    HomepageComponent,
    SurveyListComponent,
    SurveyFormComponent
  ],
  // Import necessary modules for the application
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgForOf, // Note: NgForOf is a directive, not a module, it should not be imported like this
    ReactiveFormsModule
  ],
  // Declare services that will be available for dependency injection
  providers: [SurveyListService],
  // Specify the root component that Angular should bootstrap
  bootstrap: [AppComponent]
})
export class AppModule {
}
