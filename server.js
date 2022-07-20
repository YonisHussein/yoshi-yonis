const express = require ('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const helpers = require('./utils/helpers');

const app = express ();
const PORT = process.env.PORT || 3001;