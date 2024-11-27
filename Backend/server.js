const { Console } = require("console");
const app = require("./app");
port = 3200
//telling port that, it is env file
const dotenv = require("dotenv");

const connectDataBase = require("./config/database");

//config
dotenv.config({path:"backend/config/config.env"});
//connect DataBase
connectDataBase();



//listening server
app.listen(process.env.PORT, ()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`);
})
// app.listen(port, ()=>{
//     console.log(`server is working on http://localhost:${port}`);
// })