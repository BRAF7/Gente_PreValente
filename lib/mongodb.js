import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
const conectardb = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado ')
  } catch (error) {
    console.log(error);
  }
};

export default conectardb;