const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const port = 8888;

let connectinStr = 'mongodb://localhost:27017/testDatabase';



let app = express();

/// MONGODB Example
// mongodb
//   .MongoClient
//   .connect(connectinStr)
//   .then(client =>{
//       let db = client.db('testDatabase');
//       let dogs = db.collection('dogs');
//       dogs.insert({
//           name:'ivan',
//           age:4,
//           color:'black',
//           breed:'cocker'
//       })
//
//   });

// Mongoose Example
// let Student = mongoose.model('Student',{
//     firstName:{type:String,required:true},
//     lastName:{type:String,required:true },
//     facultyNumber:{type:Number,required:true,unique:true},
//     age:{type:Number}
// });
//
// mongoose.connect(connectinStr)
//   .then(()=>{
//       let firstStudent = new Student({
//           firstName:'Kiril',
//           lastName:'Kirilov',
//           facultyNumber:'13738',
//           age:'23'});
//
//       firstStudent
//         .save()
//         .then(()=>{
//             Student.find({}).then(data=>{
//                 console.log(data);
//             })
//         }).catch(err=>{
//             console.warn(err)
//       })
//   });




const homeHandler = require('./handlers/homeHandler');
const aboutHandler = require('./handlers/aboutHandler');
const paramHandler = require('./handlers/paramhandler');


app.use(express.static('/public'));

app.get('/',(req,res) => homeHandler(req,res));
app.get('/about',(req,res)=>aboutHandler(req,res));
app.get('/params/:id',(req,res)=>paramHandler(req,res));


app.listen(port,()=>console.log(`Listenin on port:${port}\nhttp://localhost:${port}`));

