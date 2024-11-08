import mongoose from "mongoose";
import config from "config";

const MONGO_URL: string = config.get("mongo_url");
export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URL as string, {
      connectTimeoutMS: 300000,
    });
    console.log(`MOngoDB Connected: ${connect.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
