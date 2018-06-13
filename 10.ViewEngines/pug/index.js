const exprress = require("express");
let app = exprress();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index",{
      title:'Hello from Express!',
      subtitle:'Ad from Pug!',
      nested:{
          firstName:'Gosho'
      },
      myArray:['one','two','three'],
      isValid:false
  });
});

app.listen(1337);
