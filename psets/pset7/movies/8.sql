SELECT name FROM people WHERE id IN (SELECT stars.person_id FROM stars WHERE stars.movie_id = (SELECT id FROM movies WHERE title = "Toy Story"));
