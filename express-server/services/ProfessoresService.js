/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Cria um novo professor
*
* professor Professor 
* no response value expected for this operation
* */
const createProfessor = ({ professor }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        professor,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Remove professor por ID
*
* idUnderscoreprofessor Integer 
* no response value expected for this operation
* */
const deleteProfessor = ({ idUnderscoreprofessor }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscoreprofessor,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Obtém professor por ID
*
* idUnderscoreprofessor Integer 
* no response value expected for this operation
* */
const retrieveProfessor = ({ idUnderscoreprofessor }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscoreprofessor,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Lista todos os professores
*
* returns List
* */
const retrieveProfessores = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Atualiza professor por ID
*
* idUnderscoreprofessor Integer 
* professor Professor 
* no response value expected for this operation
* */
const updateProfessor = ({ idUnderscoreprofessor, professor }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscoreprofessor,
        professor,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createProfessor,
  deleteProfessor,
  retrieveProfessor,
  retrieveProfessores,
  updateProfessor,
};
