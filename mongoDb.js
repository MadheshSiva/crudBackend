const mongoose = require("mongoose")

exports.connect = async() => {
    try{
         await mongoose.connect(`mongodb+srv://madheshsiva28:rj4hD7UuEfkNeQ6o@mymongodb.pldihev.mongodb.net/?retryWrites=true&w=majority&appName=mymongodb`)
         console.log("DB connected")
    }catch(err) {
       console.log({err : err.message})
    }
}