const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//import routes
const userRoutes = require("./routes/user");



//app
const app = express();

// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config();


// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());


 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

//routes middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
