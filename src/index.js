import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import { noteRouter } from "./modules/controller"


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use(noteRouter);

app.listen(3000,async ()=>{
    console.log("http://localhost:3000");
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb+srv://BF-user:armbr00@cluster0.cna6r10.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp');
})










