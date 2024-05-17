/* 
Sai Lohith Panthangi - G01389946
Kalaivani Palani - G01455734
Mounaraga Annavaram – G01411743
*/


/*
Defines the routing configuration for the Angular application.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListComponent } from "./All_Survey_List/All_Survey_List.component";
import { SurveyFormComponent } from "./Survey_form/Survey_form.component";
import { HomepageComponent } from "./welcomePage/homepage.component";

// Define routes
const routes: Routes = [
  {path: 'All_Survey_List', component: SurveyListComponent},
  {path: 'Survey_form', component: SurveyFormComponent},
  {path: 'welcomePage', component: HomepageComponent},
  {
    path: '',
    redirectTo: 'welcomePage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
