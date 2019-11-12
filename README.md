# How to setup:

1. $ git clone https://github.com/daverave1212/DuelMastersNode.git
2. Copy the sqlite folder to C:/ and add C:/sqlite to PATH environment variable
3. Start it with $ sqlite3 (exit with .quit)

Models:

Card:
    name varchar(256) NOT NULL,
    id varchar(256) PRIMARY KEY,
    civilization varchar(16) NOT NULL,
    type varchar(256) NOT NULL,
    cost int NOT NULL,
    text varchar(512),
    race varchar(64),
    power int

	
	