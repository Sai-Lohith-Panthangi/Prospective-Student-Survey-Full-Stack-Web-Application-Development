
/*
Controller class responsible for handling HTTP requests related to survey forms.
*/
package University.georgemason.project642.springboot.survey_controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import University.georgemason.project642.springboot.Survey_repository.SurveyformRepository;
import University.georgemason.project642.springboot.table_content.surveyform;

@RestController
@RequestMapping("/api/hw-3")
public class SurveyFormController {
    private final SurveyformRepository surveyformRepository;

    public SurveyFormController(SurveyformRepository surveyformRepository) {
        this.surveyformRepository = surveyformRepository;
    }

    /*
    Update an existing survey by its ID.
    */
    @PutMapping("/{id}")
    public ResponseEntity<surveyform> updateSurveyById(@PathVariable Long id, @RequestBody surveyform updatedsurveydetails) {
        Optional<surveyform> existingsurveydetails = surveyformRepository.findById(id);
        if (existingsurveydetails.isPresent()) {
            surveyform surveydetails = existingsurveydetails.get();
            BeanUtils.copyProperties(updatedsurveydetails, surveydetails, "id");
            surveyformRepository.save(surveydetails);
            return new ResponseEntity<>(surveydetails, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /*
    Save a new survey.
    */
    @PostMapping
    public surveyform saveSurvey(@RequestBody surveyform surveydetails) {
        try {
            return surveyformRepository.save(surveydetails);
        } catch (Throwable t) {
            throw t;
        }
    }

    /*
    Delete a survey by its ID.
    */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSurveyById(@PathVariable Long id) {
        Optional<surveyform> surveydetails = surveyformRepository.findById(id);
        if (surveydetails.isPresent()) {
            surveyformRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /*
    Get all surveys.
    */
    @GetMapping
    public List<surveyform> getAllSurveys() {
        return surveyformRepository.findAll();
    }

    /*
    Get a survey by its ID.
    */
    @GetMapping("/{id}")
    public ResponseEntity<surveyform> getSurveyById(@PathVariable Long id) {
        Optional<surveyform> surveydetails = surveyformRepository.findById(id);
        return surveydetails.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
