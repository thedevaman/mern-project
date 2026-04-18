import express from 'express'
import { collectionName, connection } from './dbconfig.js';

const app = express();

app.use(express.json());

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


// app.get('/',(req,res)=>{
//   res.send({
//     message:"basic Api Done",
//     success:true
//   })
// })

app.listen(3200)