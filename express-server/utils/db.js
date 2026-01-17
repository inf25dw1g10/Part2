const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Igor1234!',
  database: 'school'
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao ligar ao MySQL:", err);
    throw err;
  }
  console.log("MySQL ligado com sucesso!");
});

module.exports = connection;
