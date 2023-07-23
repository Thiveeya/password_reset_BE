require("dotenv").config();
const express = require("express");
const app = express();
const passwordReset = require("./routes/passwordReset");
const users = require("./routes/users");

app.use(express.json());
const mongoose = require("mongoose");
const cors = require('cors');
app.use(cors());  /* To avoid cross origin error */


app.get('/',(req,res) => res.send(`
<div>
<p> In Home Page </p>
</div>
 `))


app.use(express.json());
const dbConnect = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://rbsthivi:thiveeya@cluster0.vgypaij.mongodb.net/?retryWrites=true&w=majority",
   
  
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoIndex: true,
        }
      );
      console.log("DB Connected");
    } catch (e) {
      console.log(e.message, "error in connecting db");
    }
  };
  app.use("/api/users", users);
  app.use("/api/password-reset", passwordReset);
  

 
app.listen(process.PORT || 3001, async (err) => {
    await dbConnect();
    console.log("Started server ");
    if (err) {
      console.log(err, "error in starting server");
    }
  });
