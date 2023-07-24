// const {MongoClient} = require('mongodb');
// const client = new MongoClient("mongodb+srv://rbsthivi:thiveeya@cluster0.vgypaij.mongodb.net");
   

// async function start(){
//     await client.connect()
//     console.log("Connected")
//     module.exports = client.db()
//     const app = require('./app')
//     app.listen(3003)
//   }
  
//     start()
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

async function dbConnect() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log('DB connected')
    return client;
}

export const client = await dbConnect();