## Commands

```
  $ npm init --y
  $ npm install --save express
  $ npm install --save dotenv
  $ npm install --save-dev nodemon
  $ npm install --save oracledb
```

## Running Custom Command

```
  $ npm run dev
```

# Oracle Commands

## Open PDB And Save State

```
  $ sqlplus / as sysdba
  $ alter pluggable database ORCLPDB open;
  $ alter pluggable database ORCLPDB save state;
  $ select con_name, state from dba_pdb_saved_states;
```

## Create user in PDB

```
  $ sqlplus / as sysdba
  $ ALTER SESSION SET CONTAINER = orclpdb;
  $ CREATE USER <username> IDENTIFIED BY <password> CONTAINER=CURRENT;
  $ GRANT ALL PRIVILEGES TO <username> CONTAINER=CURRENT;
  $ ALTER USER <username> DEFAULT TABLESPACE users TEMPORARY TABLESPACE temp QUOTA UNLIMITED ON users;
```

## Queries

```sql
CREATE TABLE PERSON (
	PERSON NUMBER AUTO_INCREMENT,
	FIRST_NAME VARCHAR2(100) NOT NULL,
	EMAIL VARCHAR2(100) NOT NULL,
	PASSWORD VARCHAR2(100) NOT NULL,
	ADD_DATE DATE DEFAULT SYSDATE,
	PRIMARY KEY(PERSON)
);

CREATE SEQUENCE SQ_PERSON NOCACHE;

SELECT * FROM PERSON;

CREATE TABLE CATEGORY (
	CATEGORY NUMBER,
	NAME VARCHAR2(100) NOT NULL,
	DESCRIPTION VARCHAR2(200) NOT NULL,
	PERSON NUMBER NOT NULL,
	ADD_DATE DATE DEFAULT SYSDATE,
	PRIMARY KEY (CATEGORY),
	FOREIGN KEY(PERSON) REFERENCES PERSON(PERSON)
);

CREATE SEQUENCE SQ_CATEGORY NOCACHE;

SELECT * FROM CATEGORY;

INSERT INTO PERSON(PERSON, FIRST_NAME, EMAIL, PASSWORD)
VALUES (SQ_PERSON.NEXTVAL,'Yosef', 'yosefmarr@gmail.com', '123');

SELECT *
FROM PERSON
WHERE EMAIL = 'yosefmarr@gmail.com'
AND PASSWORD = '123';

INSERT INTO CATEGORY(CATEGORY, NAME, DESCRIPTION, PERSON)
VALUES (SQ_CATEGORY.NEXTVAL, 'Friday', 'Fun and games', 1);

-- ERROR
--INSERT INTO CATEGORY(CATEGORY, NAME, DESCRIPTION, PERSON)
--VALUES (SQ_CATEGORY.NEXTVAL, 'Monday', 'Bus', 2);

SELECT * FROM CATEGORY;


-->  ATOMICAS





```
