const app = require("express")();
const handlebears = require("express-handlebars");

app.engine(
  ".hbs",
  handlebears({
    extname: ".hbs"
  })
);
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  let context = {
    contacts: [
      { name: "Ivan", email: "i.ivanov@gmail.com" },
      { name: "Pesho", email: "p.peshov@gmail.com" },
      { name: "Trayan", email: "t.ivanov@mail.bg" }
    ]
  };
  res.render("home",context);
});

app.listen(1337, () => {
  console.log("http://localhost:1337");
});
