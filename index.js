require('dotenv').config();

const express = require('express');
const app = express();

const router = require('./routes/routes.js');

// database connection
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const dataBase = mongoose.connection;

dataBase.on('error', (error) => { console.log(error); })

dataBase.once('connected', () => { console.log('Database Connected'); })


// cors
const { json } = require("body-parser");
app.use(json());

const cors = require("cors");
app.use(cors({
  domains: '*',
  methods: "*"
}));

app.use('/api', router);

app.listen(4000, () => {
    console.log(`GraphQL Server Started at ${4000}`)
})