const { Console } = require("console");
const app = require("./app");

//telling port that, it is env file
const dotenv = require("dotenv");

//config
dotenv.config({path:"backend/config/conig.env"});

//listening server
app.listen(process.env.PORT, ()=>{
    Console.log(`server is working on http://localhost:${process.env.PORT}`);
})