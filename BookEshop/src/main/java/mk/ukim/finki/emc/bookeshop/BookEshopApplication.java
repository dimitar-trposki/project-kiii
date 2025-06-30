package mk.ukim.finki.emc.bookeshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class BookEshopApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookEshopApplication.class, args);
    }

}
