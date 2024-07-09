const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { bgCyan } = require('colors');
require('colors')
const connectDb = require('./Config/config')
//dotenv config
dotenv.config();




connectDb();

const app = express();


app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));



app.use('/api/items',require('./Routes/itemRoute'))
app.get('/',(req,res)=>{
    res.send('Hello World')
})



const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{
console.log(`Server is running on Port ${PORT}`.bgCyan.white)
})