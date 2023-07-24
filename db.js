import { MongoClient } from "mongodb";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

// const MONGO_URL = process.env.MONGO_URL;

async function dbConnect() {
    const client = new MongoClient("mongodb+srv://rbsthivi:thiveeya@cluster0.vgypaij.mongodb.net",{ useNewUrlParser: true });
    await client.connect();
    console.log('DB connected')
    return client;
}

export const client = await dbConnect();
