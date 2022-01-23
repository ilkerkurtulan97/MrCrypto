const express = require('express');
const mongoose = require('mongoose');
const pageRouter = require('./routes/pageRouter');
const authRouter = require('./routes/authRouter');
const Post = require('./model/User');
const cors = require('cors');

//Initializing the app
const app = express()

mongoose.connect('mongodb+srv://iko4545:q1w2e3r4@cluster0.4cntg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected !")
}).catch((err) => {
  console.log("Error occured: ", err);
});

//Middlewares
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors());

require('dotenv').config();

//Routing
app.use('/', pageRouter);
app.use('/auth', authRouter);


//Launching the application on port 5000
const port = 5000;
app.listen(port, () => {
  console.log(`App started working at http://localhost:${port}`);
})