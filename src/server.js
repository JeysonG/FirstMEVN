const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const itemRoute = require('./routes/item');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/muscleapp')
.then(() => console.log('db connected'))
.catch(err => console.log(err));

//settings

app.set('port', process.env.PORT || 3000);

//middlewres
app.use(cors());
app.use(bodyparser.json());

//routes

app.use('/item', itemRoute);

//static files

app.use(express(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server on port', 30000);
});