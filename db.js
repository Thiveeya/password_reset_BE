const {MongoClient} = require('mongodb');
const client = new MongoClient("mongodb+srv://rbsthivi:thiveeya@cluster0.vgypaij.mongodb.net");
   

async function start(){
    await client.connect()
    console.log("Connected")
    module.exports = client.db()
    const app = require('./app')
    app.listen(3000)
  }
  
    start()