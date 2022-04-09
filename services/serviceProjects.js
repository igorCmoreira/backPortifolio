const {Projects, Languages} = require('../models/index');

const addProject = async (project) => {
  const {name, about, src, alt, githubLink, initialDate, languagesIds} = project;
  const projectInit = {
    name,
    about,
    src,
    alt,
    githubLink,
    initialDate,
  };
  const projectCreted= await Projects.create(projectInit);
  const languages = await Languages.findAll({where:{
    id: languagesIds,
  }});

  await projectCreted.addLanguages(languages);

  return projectCreted;
};

const findAll= async() => Projects.findAll({include: [{model: Languages, as: 'languages', through: { attributes: [] }  }]});
const findById= async(id) => Projects.findByPk(id,
   {include: [{model: Languages, as: 'languages', through: { attributes: [] }  }]});

const del = async (project) => project.destroy();
module.exports = {addProject, findAll, del, findById};