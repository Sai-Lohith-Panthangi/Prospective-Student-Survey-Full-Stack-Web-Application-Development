/* 
Sai Lohith Panthangi - G01389946
Kalaivani Palani - G01455734
Mounaraga Annavaram – G01411743
*/

/*
Entity class representing a survey form, mapped to the "Survey_Table" table in the database.
*/
package University.georgemason.project642.springboot.table_content;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "Survey_Table")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class surveyform {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Fields representing various details of the survey form

    @Column(name = "first name", nullable = false)
    private String firstName;

    @Column(name = "last name", nullable = false)
    private String lastName;

    @Column(name = "street address", nullable = false)
    private String streetAddress;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "state", nullable = false)
    private String state;

    @Column(name = "zip", nullable = false)
    private String zip;

    @Column(name = "telephone number", nullable = false)
    private String telephoneNumber;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "date of survey", nullable = false)
    private String dateOfSurvey;
    
    // Field to store a set of liked most options
    @ElementCollection
    @CollectionTable(name = "liked most options", joinColumns = @JoinColumn(name = "survey_id"))
    @Column(name = "liked most options")
    private Set<String> likedMostOptions;

    // Fields for other details of the survey form
    @Column(name = "Interested in")
    private String interestedIn;

    @Column(name = "likelihood to recommend")
    private String likelihoodToRecommend;

    @Column(name = "additional comments", columnDefinition = "TEXT")
    private String additionalComments;

    // Getters and setters for the fields

    // Getter and setter for ID
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getter and setter for First Name
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    // Getter and setter for Last Name
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    // Getter and setter for Street Address
    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    // Getter and setter for City
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    // Getter and setter for State
    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    // Getter and setter for Zip
    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    // Getter and setter for Telephone Number
    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    // Getter and setter for Email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Getter and setter for Date Of Survey
    public String getDateOfSurvey() {
        return dateOfSurvey;
    }

    public void setDateOfSurvey(String dateOfSurvey) {
        this.dateOfSurvey = dateOfSurvey;
    }

    // Getter and setter for Liked Most Options
    public Set<String> getLikedMostOptions() {
        return likedMostOptions;
    }

    public void setLikedMostOptions(Set<String> likedMostOptions) {
        this.likedMostOptions = likedMostOptions;
    }

    // Getter and setter for Interested In
    public String getInterestedIn() {
        return interestedIn;
    }

    public void setInterestedIn(String interestedIn) {
        this.interestedIn = interestedIn;
    }

    // Getter and setter for Likelihood To Recommend
    public String getLikelihoodToRecommend() {
        return likelihoodToRecommend;
    }

    public void setLikelihoodToRecommend(String likelihoodToRecommend) {
        this.likelihoodToRecommend = likelihoodToRecommend;
    }

    // Getter and setter for Additional Comments
    public String getAdditionalComments() {
        return additionalComments;
    }

    public void setAdditionalComments(String additionalComments) {
        this.additionalComments = additionalComments;
    }
}
