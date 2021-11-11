const mongoose = require("mongoose") 
const foxSchema = mongoose.Schema({ name: String, color: String, weight: Number }) 
module.exports = mongoose.model("fox", foxSchema) 