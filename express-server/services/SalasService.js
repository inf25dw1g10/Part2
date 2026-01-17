/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Cria uma nova sala
*
* sala Sala 
* no response value expected for this operation
* */
const createSala = ({ sala }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        sala,
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
* Remove sala por ID
*
* idUnderscoresala Integer 
* no response value expected for this operation
* */
const deleteSala = ({ idUnderscoresala }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscoresala,
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
* Obtém sala por ID
*
* idUnderscoresala Integer 
* no response value expected for this operation
* */
const retrieveSala = ({ idUnderscoresala }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscoresala,
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
* Lista todas as salas
*
* returns List
* */
const retrieveSalas = () => new Promise(
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
* Atualiza sala por ID
*
* idUnderscoresala Integer 
* sala Sala 
* no response value expected for this operation
* */
const updateSala = ({ idUnderscoresala, sala }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscoresala,
        sala,
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
  createSala,
  deleteSala,
  retrieveSala,
  retrieveSalas,
  updateSala,
};
