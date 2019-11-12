DROP TABLE Cards;

CREATE TABLE Cards (
    name varchar(256) NOT NULL,
    id varchar(256) PRIMARY KEY,
    civilization varchar(16) NOT NULL,
    type varchar(256) NOT NULL,
    cost int NOT NULL,
    text varchar(512),
    race varchar(64),
    power int,
    created_at date,
    updated_at date
);

INSERT INTO Cards VALUES(
    'Aqua Hulcus',
    '23/110',
    'Water',
    'Creature',
    3,
    'When you put this creature into the battle zone, draw 1 card.',
    'Liquid People',
    2000,
    NULL,
    NULL
);
