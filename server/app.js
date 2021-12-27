const express = require('express');
const mongoose = require('mongoose');
const pageController = require('./controller/pageController');
const Post = require('./model/User');

const app = express()


mongoose.connect('mongodb+srv://iko4545:ia45ia45@cluster0.4cntg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected !")
}).catch((err) => {
  console.log("Error occured: ", err);
});

//Middlewares
app.use(express.json());

//Routing
app.get('/', pageController.getIndexPage);

app.get('/login', pageController.getLoginPage);
  

//Launching the application on port 5000
const port = 5000;
app.listen(port, () => {
  console.log(`App started working at http://localhost:${port}`);
})