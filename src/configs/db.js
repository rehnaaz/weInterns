const mongoose = require("mongoose");

module.exports = () => {
  try {
    return mongoose.connect(
      // "mongodb+srv://krishna:45K5$U$!gq-C.V2@cluster0.ndxbh.mongodb.net/internshala?retryWrites=true&w=majority",
      "mongodb://localhost:27017/we_interns",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to MongoDB');
  } catch {
    console.error('Error connecting to MongoDB:', error.message);
  }
  
};
