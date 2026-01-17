const db = require('../utils/db');

const retrieveAlunos = () => new Promise((resolve, reject) => {
  db.query("SELECT * FROM Alunos", (err, results) => {
    if (err) reject(err);
    else resolve(results);
  });
});

const retrieveAluno = ({ id_aluno }) => new Promise((resolve, reject) => {
  db.query("SELECT * FROM Alunos WHERE id_aluno = ?", [id_aluno], (err, results) => {
    if (err) reject(err);
    else resolve(results[0] || {});
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

const updateAluno = ({ id_aluno, aluno }) => new Promise((resolve, reject) => {
  db.query(
    "UPDATE Alunos SET nome = ?, email = ?, curso = ? WHERE id_aluno = ?",
    [aluno.nome, aluno.email, aluno.curso, id_aluno],
    (err) => {
      if (err) reject(err);
      else resolve({ message: "Aluno atualizado" });
    }
  );
});

const deleteAluno = ({ id_aluno }) => new Promise((resolve, reject) => {
  db.query("DELETE FROM Alunos WHERE id_aluno = ?", [id_aluno], (err) => {
    if (err) reject(err);
    else resolve({ message: "Aluno removido" });
  });
});

module.exports = {
  retrieveAlunos,
  retrieveAluno,
  createAluno,
  updateAluno,
  deleteAluno
};
