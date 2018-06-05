const formidable = require('formidable');

//todo Finish 1.2!

const addMeme = (req, res) => {
  let form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if ( err ) {
      console.log(err);
    }
    let file = files.upload;
    let tempPath = file.path;
    let fileName = file.name;
    
    fs.rename(tempPath, "./db/files/" + fileName, error => {
      if ( err ) {
        console.log(err);
      }
    });
  });
  
};


module.exports = addMeme;