const express = require('express');
const cors = require('cors');

const app = express();

const languages = require('./controller/languagesController');
const projects = require('./controller/projectsController');

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, ()=> console.log(`listening on port ${process.env.PORT}`));

app.use('/', languages);
app.use('/', projects);