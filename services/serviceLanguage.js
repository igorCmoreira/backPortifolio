const {Languages} = require('../models/index');

const create = async (name) => Languages.create({ name });
const findAll= async () => Languages.findAll();
const findById = async (id) => Languages.findByPk({ id });

module.exports ={create, findAll, findById};