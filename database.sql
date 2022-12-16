CREATE TABLE CANDIDATE(
   id SERIAL PRIMARY KEY,
   numCandidate INTEGER,
   name VARCHAR(255),
   surname VARCHAR(255),
   yearOfBirth INTEGER
);
CREATE TABLE ELECTION(
    id SERIAL PRIMARY KEY,
    yearOfElection INTEGER(255),
    isHead BOOLEAN,
    candidate_id INTEGER,
    FOREIGN KEY (candidate_id) REFERENCES candidate(id)
);
