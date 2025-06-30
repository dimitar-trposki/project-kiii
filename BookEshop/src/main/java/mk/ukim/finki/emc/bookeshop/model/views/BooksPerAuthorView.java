package mk.ukim.finki.emc.bookeshop.model.views;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;

@Data
@Entity
@Subselect("SELECT * FROM public.books_per_author")
@Immutable
public class BooksPerAuthorView {

    @Id
    @Column(name = "author_id")
    private Long authorId;

    @Column(name = "book_count")
    private Integer numBooks;

}
