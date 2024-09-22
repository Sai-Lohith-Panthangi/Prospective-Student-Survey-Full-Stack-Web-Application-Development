I welcome contributions to the Prospective Student Survey full-stack web application! Whether it's reporting bugs, suggesting features, improving documentation, or submitting code contributions, your involvement helps make this project better.

How to Contribute
1. Fork the Repository
Navigate to the GitHub repository.
Click the "Fork" button to create a copy of the repository in your GitHub account.
2. Clone the Forked Repository
After forking the repository, clone it to your local machine:

bash
git clone https://github.com/your-username/prospective-student-survey.git
3. Set Up the Development Environment
Prerequisites:
Node.js and npm
Angular CLI
Java Development Kit (JDK)
Maven
MySQL Server and MySQL Workbench
Backend Setup (Spring Boot)
Navigate to Spring Initializr and create a Maven project with the necessary dependencies (Spring Web, Spring Data JPA, MySQL Driver).
Configure the application.properties file to connect to your MySQL instance.
Run the backend using:
bash
mvn spring-boot:run
Frontend Setup (Angular)
Install the Angular CLI:
bash
npm install -g @angular/cli
Navigate to the frontend folder and install the necessary packages:
bash
Copy code
npm install
Run the Angular application using:
bash
ng serve
4. Create a Branch
Before making any changes, create a new branch:

bash
git checkout -b feature-name
5. Make Changes
Ensure the code follows the existing code style and conventions.
If you're adding a new feature, consider writing test cases.
6. Commit Changes
After making changes, commit them with a descriptive message:

bash
git add .
git commit -m "Add detailed commit message explaining the changes"
7. Push to GitHub
Push your changes to your forked repository:

bash
git push origin feature-name
8. Create a Pull Request
Navigate to the original repository.
Click on the "Pull Requests" tab.
Click the "New Pull Request" button.
Select your feature branch and submit the pull request for review.
9. Respond to Feedback
Your pull request will be reviewed. You may be asked to make some changes. Once everything is reviewed and approved, your contribution will be merged into the main branch.
