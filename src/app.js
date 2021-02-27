'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect('mongodb+srv://admin:Severo5115@cluster0.qd0nc.mongodb.net/Cluster0?retryWrites=true&w=majority')

// Carrega os Models
const Product = require('./models/product');

// Carrega as rotas
const index = require('./routes/index');
const product = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/products', product);

module.exports = app;