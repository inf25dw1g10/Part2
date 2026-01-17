/**
 * The AlunosController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AlunosService');
const createAluno = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAluno);
};

const deleteAluno = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAluno);
};

const retrieveAluno = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveAluno);
};

const retrieveAlunos = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveAlunos);
};

const updateAluno = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateAluno);
};


module.exports = {
  createAluno,
  deleteAluno,
  retrieveAluno,
  retrieveAlunos,
  updateAluno,
};
