/* 
Sai Lohith Panthangi - G01389946
Kalaivani Palani - G01455734
Mounaraga Annavaram – G01411743
*/

/*
Repository interface for managing survey forms using Spring Data JPA.
*/
package University.georgemason.project642.springboot.Survey_repository;
import org.springframework.data.jpa.repository.JpaRepository;

import University.georgemason.project642.springboot.table_content.surveyform;

public interface SurveyformRepository extends JpaRepository<surveyform, Long> {
}
