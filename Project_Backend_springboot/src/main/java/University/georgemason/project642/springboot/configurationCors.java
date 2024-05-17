/* 
Sai Lohith Panthangi - G01389946
Kalaivani Palani - G01455734
Mounaraga Annavaram – G01411743
*/

/*
Configuration class for CORS (Cross-Origin Resource Sharing) setup.
*/
package University.georgemason.project642.springboot;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class configurationCors {
    // Bean to configure CORS settings
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // Allowing cross-origin requests from localhost:4200 for endpoints under /api/**
                registry.addMapping("/api/**")
                        .allowedOrigins("http://localhost:4200")
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowCredentials(true);
            }
        };
    }
}
