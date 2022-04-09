const express = require('express');

const { create, findAll, findById } = require('../services/serviceLanguage');

const router = express.Router();

router.post('/languages', async (req, res, next)=> {
  try {
    const { name }= req.body;
    const language = await create(name);
    return res.status(201).send(language);
  }catch (err) {
    console.error(err);
  }
});

router.get('/languages/:id', async (req, res, next)=> {
  try {
    const { id } = req.params;
    const language= await findById(id);
    return res.status(200).send(language);
  } catch (err) {
    console.error(err);
  }
});

router.get('/languages', async (req, res, next)=> {
  try {
    const languages = await findAll();
    return res.status(200).send(languages);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
