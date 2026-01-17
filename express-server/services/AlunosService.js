const db = require('../utils/db');

const retrieveAlunos = () => new Promise((resolve, reject) => {
  db.query("SELECT * FROM Alunos", (err, results) => {
    if (err) reject(err);
    else resolve(results);
  });
});

const createAluno = ({ aluno }) => new Promise((resolve, reject) => {
  db.query(
    "INSERT INTO Alunos (nome, email, curso) VALUES (?, ?, ?)",
    [aluno.nome, aluno.email, aluno.curso],
    (err, result) => {
      if (err) reject(err);
      else resolve({ id_aluno: result.insertId });
    }
  );
});

module.exports = {
  retrieveAlunos,
  createAluno
};
