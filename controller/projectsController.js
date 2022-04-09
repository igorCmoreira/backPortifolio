const express = require('express');

const {addProject, findAll, findById, del} = require('../services/serviceProjects');

const router = express.Router();

router.post('/projects', async (req, res, next) => {
  try {
    const projectAdd = await addProject(req.body);
    return res.status(201).send(projectAdd);
  }catch (err) {
    console.error(err);
  }
});
router.get('/projects', async (req, res, next) => {
  try{
    const projects = await findAll();
    return res.status(200).json(projects);
  } catch (err) {
    console.error(err);
  }
});

router.get('/projects/:id', async (req, res, next) => {
  try{
    const { id } = req.params
    const project = await findById(id);
    return res.status(200).json(project);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/projects/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await findById(id);
    await del(project);
    return res.status(204).end();
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;