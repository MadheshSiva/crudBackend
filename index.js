const express = require("express")
const {connect} = require("./mongoDb")
const {createList,getData, updateList, deleteList} = require("./crud")
const app = express()
const cors = require("cors")
const PORT = 3060
//Middleware
app.use(express.json())

app.use(cors())
//Router
const route = express.Router()
const createdList = route.post("/create-list",createList)
app.use("/",createdList)
const getList = route.get("/get-lists",getData)
app.use("/",getList)
const updatedData = route.put("/update-list", updateList) 
app.use("/",updatedData)
const deletedData = route.delete("/delete-list",deleteList)
app.use("/",deletedData)
app.listen(PORT,() => {
    console.log("server created")
    
})



