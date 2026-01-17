/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Cria um novo horário
*
* horario Horario 
* no response value expected for this operation
* */
const createHorario = ({ horario }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        horario,
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
* Remove horário por ID
*
* idUnderscorehorario Integer 
* no response value expected for this operation
* */
const deleteHorario = ({ idUnderscorehorario }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscorehorario,
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
* Obtém horário por ID
*
* idUnderscorehorario Integer 
* no response value expected for this operation
* */
const retrieveHorario = ({ idUnderscorehorario }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscorehorario,
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
* Lista todos os horários
*
* returns List
* */
const retrieveHorarios = () => new Promise(
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
* Atualiza horário por ID
*
* idUnderscorehorario Integer 
* horario Horario 
* no response value expected for this operation
* */
const updateHorario = ({ idUnderscorehorario, horario }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscorehorario,
        horario,
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
  createHorario,
  deleteHorario,
  retrieveHorario,
  retrieveHorarios,
  updateHorario,
};
