/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Cria uma nova aula
*
* aula Aula 
* no response value expected for this operation
* */
const createAula = ({ aula }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        aula,
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
* Remove aula por ID
*
* idUnderscoreaula Integer 
* no response value expected for this operation
* */
const deleteAula = ({ idUnderscoreaula }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscoreaula,
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
* Obtém aula por ID
*
* idUnderscoreaula Integer 
* no response value expected for this operation
* */
const retrieveAula = ({ idUnderscoreaula }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscoreaula,
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
* Lista todas as aulas
*
* returns List
* */
const retrieveAulas = () => new Promise(
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
* Atualiza aula por ID
*
* idUnderscoreaula Integer 
* aula Aula 
* no response value expected for this operation
* */
const updateAula = ({ idUnderscoreaula, aula }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscoreaula,
        aula,
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
  createAula,
  deleteAula,
  retrieveAula,
  retrieveAulas,
  updateAula,
};
