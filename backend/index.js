import express from 'express'
import { collectionName, connection } from './dbconfig.js';
import cors from 'cors'
import { ObjectId } from 'mongodb';


const app = express();

app.use(express.json());
app.use(cors())


app.post("/add-task",async(req,res)=>{
  const db = await connection();
  const collection = await db.collection(collectionName);
  const result = await collection.insertOne(req.body)
  if(result)
  {
    res.send({message:"Task Added!",success:true,result})
  }else{
    res.send({message:"Task not Added!",success:false,result})
  }
})

app.get("/task",async(req,res)=>{
  const db = await connection();
  const collection = await db.collection(collectionName);
  const result = await collection.find().toArray();
  if(result)
  {
    res.send({message:"Task List Fetched!",success:true,result})
  }else{
    res.send({message:"Something went wrong!",success:false,result})
  }
})

app.get("/task/:id",async(req,res)=>{
  const db = await connection();
  const collection = await db.collection(collectionName);
   const id = req.params.id
  const result = await collection.findOne({_id:new ObjectId(id)});
  if(result)
  {
    res.send({message:"Task List Fetched!",success:true,result})
  }else{
    res.send({message:"Something went wrong!",success:false,result})
  }
})


app.delete("/delete-task/:id",async(req,res)=>{
  const db = await connection();
  const id = req.params.id
  const collection = await db.collection(collectionName);
  const result = await collection.deleteOne({_id:new ObjectId(id)});
  if(result)
  {
    res.send({message:"Task Deleted!",success:true,result})
  }else{
    res.send({message:"Something went wrong!",success:false,result})
  }
})

app.get('/',(req,res)=>{
  res.send({
    message:"basic Api Done",
    success:true
  })
})

app.listen(3200)