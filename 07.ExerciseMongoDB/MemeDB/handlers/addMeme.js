const formidable = require("formidable");
const fs = require("fs");
let db = require("../db/db");
const randomstring = require("randomstring");

const addMeme = (req, res) => {
  let form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if ( err ) {
      console.log(err);
    }
    let file = files.meme;
    let tempPath = file.path;
    let fileName = randomstring.generate(9);
    let fileExtension = file.name.split(".").pop();
  
    let imgDir = "";
    fs.readdir("./public/memeStorage/", "utf8", (err, directories) => {
      imgDir = directories.pop();
      fs.readdir(`./public/memeStorage/${imgDir}`, "utf8", (err, dirFiles) => {
        if ( dirFiles.length >= 5 ) {
          imgDir = 1 + Number(imgDir);
          fs.mkdir(`./public/memeStorage/${imgDir}`, err => {
            if ( err ) {
              console.log(err);
            }
          });
        }
        fs.rename(
          tempPath,
          `./public/memeStorage/${imgDir}/` + fileName + "." + fileExtension,
          error => {
            if ( err ) {
              console.log(err);
            }
          }
        );
        let meme = {
          id: randomstring.generate(9),
          title: fields.memeTitle,
          memeSrc: `./public/memeStorage/${imgDir}/${fileName +
          "." +
          fileExtension}`,
          privacy: fields.status,
          description: fields.memeDescription,
          dateStamp: Date.now()
        };
      
        db.push(meme);
      
        fs.writeFile("./db/db.json", JSON.stringify(db), "utf8", err => {
          if ( err ) {
            console.log(err);
          }
        });
      });
    });
  
    res.redirect("/viewAllMemes");
  });
};

module.exports = addMeme;
