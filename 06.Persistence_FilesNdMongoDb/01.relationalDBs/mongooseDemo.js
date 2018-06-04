const mongoose = require("mongoose");

let Cat = mongoose.model("Cat", {
  name: {type: String, required: true},
  age: {type: Number, requird: true},
  color: {type: String}
});

let Owner = mongoose.model('Owner', {
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  cats: [ Cat.schema ]
});

mongoose
  .connect("mongodb://localhost:27017/cats")
  .then(() => {
    // let newCat = new Cat({
    //   name:'Pesho',
    //   age:3,
    //   color:'brown'
    // });     --->   correct cat instance
    
    // newCat.save();
    
    // let newCat = new Cat({
    //   color:'white'
    // });
    //
    // newCat.save().catch(e=>console.log(e)); --> // missing properties
    
    
    // Cat.find({}).then(cats=>{
    //   let newOwner = Owner({
    //     firstName:'Ivan',
    //     lastName:'Ivanov',
    //     cats
    //   });
    //   newOwner.save(); // --- > simulating relatins
    // });
    
    
    let catSchema = new mongoose.Schema({
      name: {type: String, required: true},
      age: {type: Number, requird: true},
      color: {type: String}
    });
    
    
    let Cat = mongoose.model('Cat', catSchema);
    
    
  })
  .catch();
