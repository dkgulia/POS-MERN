const mongoose = require('mongoose');
require('colors');

// Connect to MongoDB
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connected Successfully: ${conn.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`Error: ${error.message}`.bgRed);
    process.exit(1);
  }
};

// Export
module.exports = connectDb;
