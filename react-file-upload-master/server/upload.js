const IncomingForm = require("formidable").IncomingForm;
var fs = require('fs');

module.exports = function upload(req, res) {
  var form = new IncomingForm();

  form.on("file", async (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    console.log(file)
    const newPath = "/Users/MyFolder/Downloads/react-file-upload-master/server/test/" + file.name;
    await fs.rename(file.path, newPath, (err) => {
      // if (err) throw err;
      // res.write('File uploaded and moved!');
      // res.end();
    });
  });
  form.on("end", () => {
    res.json();
  });
  form.parse(req);
};
