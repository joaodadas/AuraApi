import mongoose from "mongoose";

const connectDatabase = async (dbUri: string) => {
  try {
    await mongoose.connect(dbUri);
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to the database.");
    process.exit(1);
  }
};

export default connectDatabase;
