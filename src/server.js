const bodyparser = require('body-parser');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/muscleapp')
.then(() => console.log('db connected'))
.catch(err => console.log(err));

app.set('port', process.env.PORT || 3000);

app.use(bodyparser.json());

app.listen(3000, () => {
    console.log('Server on port', 30000);
});