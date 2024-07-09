const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDb = require('./Config/config')
const itemModel = require('./Models/itemModel')
const items = require('./Utils/data')


//config

dotenv.config()
connectDb()


//function seeder

const importData = async()=>{
    try{
    await itemModel.deleteMany()
    const itemData = await itemModel.insertMany(items)
    console.log(`all items added`.bgMagenta)
    process.exit()
    }catch(error){
        console.log(`${error}`.bgRed.inverse)
        process.exit(1)
    }
}


importData();