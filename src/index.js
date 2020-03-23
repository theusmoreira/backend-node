const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

const routes = require('./routes');

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

mongoose.connect('mongodb+srv://matheussantos:root@mbl-members-b5dbn.mongodb.net/test?retryWrites=true&w=majority', config);

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server running in port=${PORT}`)
});