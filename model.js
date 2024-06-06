const mongoose = require("mongoose")

const crudModel = mongoose.Schema({
    studentName : {
        type : String,
        required : true
    },
    mark : {
        type : String,
        required : true
    },
    totalSubject : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

const studentData = mongoose.model("student",crudModel)
module.exports = studentData