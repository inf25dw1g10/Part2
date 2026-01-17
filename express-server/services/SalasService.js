const db = require('../utils/db');

const retrieveSalas = () => new Promise((resolve, reject) => {
  db.query("SELECT * FROM Salas", (err, results) => {
    if (err) reject(err);
    else resolve(results);
  });
});

const retrieveSala = ({ id_sala }) => new Promise((resolve, reject) => {
  db.query("SELECT * FROM Salas WHERE id_sala = ?", [id_sala], (err, results) => {
    if (err) reject(err);
    else resolve(results[0] || {});
  });
});

const createSala = ({ sala }) => new Promise((resolve, reject) => {
  db.query(
    "INSERT INTO Salas (nome, capacidade) VALUES (?, ?)",
    [sala.nome, sala.capacidade],
    (err, result) => {
      if (err) reject(err);
      else resolve({ id_sala: result.insertId });
    }
  );
});

const updateSala = ({ id_sala, sala }) => new Promise((resolve, reject) => {
  db.query(
    "UPDATE Salas SET nome = ?, capacidade = ? WHERE id_sala = ?",
    [sala.nome, sala.capacidade, id_sala],
    (err) => {
      if (err) reject(err);
      else resolve({ message: "Sala atualizada" });
    }
  );
});

const deleteSala = ({ id_sala }) => new Promise((resolve, reject) => {
  db.query("DELETE FROM Salas WHERE id_sala = ?", [id_sala], (err) => {
    if (err) reject(err);
    else resolve({ message: "Sala removida" });
  });
});

module.exports = {
  retrieveSalas,
  retrieveSala,
  createSala,
  updateSala,
  deleteSala
};
