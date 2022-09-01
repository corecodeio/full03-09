const { pool } = require('../utils/db');

module.exports.create = ({ person, name, description }) => {
  const bindings = { person, name, description };
  const SQL_INSERT_CATEGORY = `INSERT INTO CATEGORY(CATEGORY, NAME, DESCRIPTION, PERSON)
                              VALUES(SQ_CATEGORY.NEXTVAL, :name, :description, :person)`;
  return pool(SQL_INSERT_CATEGORY, bindings, { autoCommit: true });
};

module.exports.fetchAll = ({ person }) => {
  const bindings = { person };
  const SQL_SELECT_CATEGORIES = `SELECT CATEGORY, NAME, DESCRIPTION, ADD_DATE
                                FROM CATEGORY
                                WHERE PERSON = :person`;
  return pool(SQL_SELECT_CATEGORIES, bindings);
};

module.exports.findById = ({ person, category }) => {
  const bindings = { person, category };
  const SQL_SELECT_CATEGORY = `SELECT CATEGORY, NAME, DESCRIPTION, ADD_DATE
                                FROM CATEGORY
                                WHERE PERSON = :person
                                AND CATEGORY = :category`;
  return pool(SQL_SELECT_CATEGORY, bindings);
};
