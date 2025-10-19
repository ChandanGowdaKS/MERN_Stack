const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sample_sql',
  password: "Chandu@9698"
});

let q = "SHOW TABLES"
try {
  connection.query(q, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch {
  console.log(err);
}

connection.end();

let createRandomUser = () =>  {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),

  };
}
console.log(createRandomUser());