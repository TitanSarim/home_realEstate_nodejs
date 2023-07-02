const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "./storage/blog");
  },
  filename(req, file, callback) {
    const fileName =
      path
        .basename(file.originalname, path.extname(file.originalname))
        .toLowerCase()
        .replace(/\s+/g, "-") +
      "-" +
      Date.now().toString() +
      path.extname(file.originalname).toLowerCase();
    callback(null, fileName);
  },
});

const uploadBlogs = multer({ storage });

module.exports = uploadBlogs
