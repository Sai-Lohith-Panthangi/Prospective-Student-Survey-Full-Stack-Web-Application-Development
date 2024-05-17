


/*
Model representing a survey form with its fields in typescript for creating table in a database. 
*/
export class SurveyForm {
  id: string; // Unique identifier
  Gid: string; // Group ID
  firstName: string; // First name of the student
  lastName: string; // Last name of the student
  streetAddress: string; // student's street address
  city: string; // student's city
  state: string; // student's state
  zip: string; // student's ZIP code
  telephoneNumber: string; // student's telephone number
  email: string; // student's email address
  dateOfSurvey: string; // Date of the survey
  likedMostOptions: string[]; // Options liked most by the student
  interestedIn: string; // Areas of interest for the student
  likelihoodToRecommend: string; // Likelihood of recommending
  additionalComments: string; // Additional comments

  constructor() {
    this.id = ""; // Initialize with an empty string
    this.Gid = ""; // Initialize with an empty string
    this.firstName = ""; // Initialize with an empty string
    this.lastName = ""; // Initialize with an empty string
    this.streetAddress = ""; // Initialize with an empty string
    this.city = ""; // Initialize with an empty string
    this.state = ""; // Initialize with an empty string
    this.zip = ""; // Initialize with an empty string
    this.telephoneNumber = ""; // Initialize with an empty string
    this.email = ""; // Initialize with an empty string
    this.dateOfSurvey = ""; // Initialize with an empty string
    this.likedMostOptions = []; // Initialize as an empty array
    this.interestedIn = ""; // Initialize with an empty string
    this.likelihoodToRecommend = ""; // Initialize with an empty string
    this.additionalComments = ""; // Initialize with an empty string
  }
}
