# Prospective-Student-Survey-Full-Stack-Web-Application-Development
Developed a full-stack web app using Angular for the frontend and Spring Boot for the backend. Implemented RESTful endpoints for CRUD operations and integrated MySQL with JPA and JDBC for database management. Enhanced user experience by allowing updates and deletions of survey submissions.

# Student Survey Full-Stack Application

## Overview
This project is a full-stack web application that allows prospective students to share feedback about their campus visits via a survey form. Users can submit their feedback and view all survey records submitted so far. The project leverages the latest versions of Angular for the frontend and Spring Boot for the backend. CRUD operations are implemented to enhance user interaction.

## Technologies Used
- Frontend: Angular, Node.js
- Backend: Spring Boot, RESTful Web Services, Spring Data JPA
- Database: MySQL

## Development Environment
- IDE: Visual Studio Code
- MySQL Tools: MySQL Server and Workbench

## Application Features
1. **Survey Form**: Allows users to submit feedback about their campus visit.
2. **Survey List**: Displays a list of all submitted surveys, with options to update or delete each survey.
3. **CRUD Operations**: Implemented for managing survey data efficiently.
4. **Routing and Navigation**: Seamless navigation between different views using Angular Router.

## Setup and Installation

### Prerequisites
- Node.js and npm
- Angular CLI
- Java Development Kit (JDK)
- Maven
- MySQL Server and MySQL Workbench

### Frontend Setup (Angular):

1. **Install Node.js and npm**
   - Download and install from [Node.js official website](https://nodejs.org/).

2. **Install Angular CLI**
   ```bash
   npm install -g @angular/cli
3. **Create a New Angular Project**
   ```bash
   ng new Project_frontend_Angular
4. **Generate Components**
   ```bash
   ng generate component welcomePage
   ```bash
   ng generate component Survey_form
   ```bash
   ng generate component All_Survey_List
5. **Setup Angular Router**
   ```bash
   ng generate module app-routing --flat --module=app
6. **Update app-routing.module.ts to define routes for the components.**
7. **Configure App Module**
- Import necessary modules: BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, and AppRoutingModule.
- Declare components and provide services.
8. **Generate and Implement Services**
   ```bash
   ng generate service Survey_form
9. **Run the Angular Application**
   ```bash
   ng serve

### Backend Setup (Spring Boot):

1. **Navigate to Spring Initializr**
- Generate a Maven project with dependencies: Spring Web, Spring Data JPA, MySQL Driver.
2. **Setup MySQL Database**
- Download and install MySQL Server and Workbench from the official MySQL website.
- Create a database and tables as required.
3. **Configure Spring Boot Application**
- Update application.properties for MySQL connection.
- Add JPA properties as needed.
4. **Define Entity, Repository, and Controller**
- Create Surveyform.java entity class.
- Create SurveyformRepository interface extending JpaRepository.
- Create SurveyformController class with CRUD endpoints.
5. **CORS Configuration**
- Configure CORS to allow requests from the frontend application.
6. **Run the Spring Boot Application**
   ```bash
   mvn spring-boot:run


### Running the Full-Stack Application:

1. **Start the Backend (Spring Boot)**
   ```bash
   mvn spring-boot:run
2. **Start the Frontend (Angular)**
   ```bash
   ng serve
3. **Access the Application**
- Open a browser and navigate to http://localhost:4200.

### Conclusion:
This project demonstrates the integration of Angular and Spring Boot to create a full-stack web application for managing student survey data. Users can submit and manage feedback through a user-friendly interface, with data securely stored and managed in a MySQL database.

### Additional Features:
- Update and Delete survey records directly from the frontend.
- Efficient communication between frontend and backend using RESTful APIs.
