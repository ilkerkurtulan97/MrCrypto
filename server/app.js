const express = require('express');
const mongoose = require('mongoose');

const app = express()


mongoose.connect('mongodb+srv://iko4545:<password>@cluster0.4cntg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Middlewares
app.use(express.json());


//Routing
app.get('/', (req, res) => {
    res.send('Index page')
  })
  

//Launching the application on port 5000
const port = 5000;
app.listen(port, () => {
  console.log(`App started working at http://localhost:${port}`)
})