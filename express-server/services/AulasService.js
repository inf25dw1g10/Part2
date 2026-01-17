const db = require('../utils/db');

const retrieveAulas = () => new Promise((resolve, reject) => {
  db.query("SELECT * FROM Aulas", (err, results) => {
    if (err) reject(err);
    else resolve(results);
  });
});

const retrieveAula = ({ id_aula }) => new Promise((resolve, reject) => {
  db.query("SELECT * FROM Aulas WHERE id_aula = ?", [id_aula], (err, results) => {
    if (err) reject(err);
    else resolve(results[0] || {});
  });
});

const createAula = ({ aula }) => new Promise((resolve, reject) => {
  db.query(
    "INSERT INTO Aulas (disciplina, id_professor) VALUES (?, ?)",
    [aula.disciplina, aula.id_professor],
    (err, result) => {
      if (err) reject(err);
      else resolve({ id_aula: result.insertId });
    }
  );
});

const updateAula = ({ id_aula, aula }) => new Promise((resolve, reject) => {
  db.query(
    "UPDATE Aulas SET disciplina = ?, id_professor = ? WHERE id_aula = ?",
    [aula.disciplina, aula.id_professor, id_aula],
    (err) => {
      if (err) reject(err);
      else resolve({ message: "Aula atualizada" });
    }
  );
});

const deleteAula = ({ id_aula }) => new Promise((resolve, reject) => {
  db.query("DELETE FROM Aulas WHERE id_aula = ?", [id_aula], (err) => {
    if (err) reject(err);
    else resolve({ message: "Aula removida" });
  });
});

module.exports = {
  retrieveAulas,
  retrieveAula,
  createAula,
  updateAula,
  deleteAula
};
