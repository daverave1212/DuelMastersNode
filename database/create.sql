CREATE TABLE Cards (
    id int PRIMARY KEY,
    name varchar(255),
    type int,
    created_at date,
    updated_at date
);

INSERT INTO Cards VALUES(0, 'Exodia', 1, NULL, NULL);
INSERT INTO Cards VALUES(1, 'Charmander', 1, NULL, NULL);
INSERT INTO Cards VALUES(2, 'Fireball', 2, NULL, NULL);
