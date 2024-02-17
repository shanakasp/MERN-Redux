const mongoose = require("mongoose");
require("dotenv").config();

// Define a function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shanakaprince:Shanaka123@cluster0.d4z1vm1.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
