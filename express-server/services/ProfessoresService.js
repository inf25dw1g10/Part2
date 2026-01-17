const db = require('../utils/db');

const retrieveProfessores = () => new Promise((resolve, reject) => {
  db.query("SELECT * FROM Professores", (err, results) => {
    if (err) reject(err);
    else resolve(results);
  });
});

const retrieveProfessor = ({ id_professor }) => new Promise((resolve, reject) => {
  db.query("SELECT * FROM Professores WHERE id_professor = ?", [id_professor], (err, results) => {
    if (err) reject(err);
    else resolve(results[0] || {});
  });
});

const createProfessor = ({ professor }) => new Promise((resolve, reject) => {
  db.query(
    "INSERT INTO Professores (nome, email, departamento) VALUES (?, ?, ?)",
    [professor.nome, professor.email, professor.departamento],
    (err, result) => {
      if (err) reject(err);
      else resolve({ id_professor: result.insertId });
    }
  );
});

const updateProfessor = ({ id_professor, professor }) => new Promise((resolve, reject) => {
  db.query(
    "UPDATE Professores SET nome = ?, email = ?, departamento = ? WHERE id_professor = ?",
    [professor.nome, professor.email, professor.departamento, id_professor],
    (err) => {
      if (err) reject(err);
      else resolve({ message: "Professor atualizado" });
    }
  );
});

const deleteProfessor = ({ id_professor }) => new Promise((resolve, reject) => {
  db.query("DELETE FROM Professores WHERE id_professor = ?", [id_professor], (err) => {
    if (err) reject(err);
    else resolve({ message: "Professor removido" });
  });
});

module.exports = {
  retrieveProfessores,
  retrieveProfessor,
  createProfessor,
  updateProfessor,
  deleteProfessor
};
