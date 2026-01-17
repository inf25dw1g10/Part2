const db = require('../utils/db');

const retrieveHorarios = () => new Promise((resolve, reject) => {
  db.query("SELECT * FROM Horarios", (err, results) => {
    if (err) reject(err);
    else resolve(results);
  });
});

const retrieveHorario = ({ id_horario }) => new Promise((resolve, reject) => {
  db.query("SELECT * FROM Horarios WHERE id_horario = ?", [id_horario], (err, results) => {
    if (err) reject(err);
    else resolve(results[0] || {});
  });
});

const createHorario = ({ horario }) => new Promise((resolve, reject) => {
  db.query(
    "INSERT INTO Horarios (dia_semana, hora_inicio, hora_fim, id_sala, id_professor, id_aula) VALUES (?, ?, ?, ?, ?, ?)",
    [
      horario.dia_semana,
      horario.hora_inicio,
      horario.hora_fim,
      horario.id_sala,
      horario.id_professor,
      horario.id_aula
    ],
    (err, result) => {
      if (err) reject(err);
      else resolve({ id_horario: result.insertId });
    }
  );
});

const updateHorario = ({ id_horario, horario }) => new Promise((resolve, reject) => {
  db.query(
    "UPDATE Horarios SET dia_semana = ?, hora_inicio = ?, hora_fim = ?, id_sala = ?, id_professor = ?, id_aula = ? WHERE id_horario = ?",
    [
      horario.dia_semana,
      horario.hora_inicio,
      horario.hora_fim,
      horario.id_sala,
      horario.id_professor,
      horario.id_aula,
      id_horario
    ],
    (err) => {
      if (err) reject(err);
      else resolve({ message: "Horário atualizado" });
    }
  );
});

const deleteHorario = ({ id_horario }) => new Promise((resolve, reject) => {
  db.query("DELETE FROM Horarios WHERE id_horario = ?", [id_horario], (err) => {
    if (err) reject(err);
    else resolve({ message: "Horário removido" });
  });
});

module.exports = {
  retrieveHorarios,
  retrieveHorario,
  createHorario,
  updateHorario,
  deleteHorario
};
