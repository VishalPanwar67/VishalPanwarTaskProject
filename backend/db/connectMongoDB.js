import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/flipr";

    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("MongoDB connected");
  } catch (err) {
    console.error("Mongo connection error:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectToMongoDB;
