const multer = require('multer');
const util = require("util");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    let newFileName = Date.now() + '-' + file.originalname
    cb(null, newFileName);
    req.fileName = newFileName;
  }
});

const upload = multer({storage: storage});
module.exports = upload;