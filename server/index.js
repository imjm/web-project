const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cookieParser());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI).then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


  
app.use(cors());

app.use('/api/dialogflow', require('./routes/dialogflow'));
app.use('/api/users', require('./routes/users'));
app.use("/posts", require("./routes/posts"));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})