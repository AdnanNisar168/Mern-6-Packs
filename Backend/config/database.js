const mongoose = require("mongoose");

const connectDataBase = ()=>{
    
    mongoose.connect(process.env.DB_URI,
        {useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((data)=>{
        console.log(`mongodb Connected with server: ${data.connection.host}`)
        }).catch((err)=>{
            console.log(err);
    })

}

module.exports = connectDataBase