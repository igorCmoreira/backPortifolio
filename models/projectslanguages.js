'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectsLanguages = sequelize.define('ProjectsLanguages', {}, { timestamps: false });

  ProjectsLanguages.associate = (models) => {
    models.Languages.belongsToMany(models.Projects, {
      as: 'projects_id',
      through: ProjectsLanguages,
      foreignKey: 'languageId',
      otherKey: 'projectId',
    });
    models.Projects.belongsToMany(models.Languages, {
      as: 'languages',
      through: ProjectsLanguages,
      foreignKey: 'projectId',
      otherKey: 'languageId',
    });
  };
  return ProjectsLanguages;
}