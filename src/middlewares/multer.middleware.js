import multer from "multer";

// cb : callback
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // file name should be unique thats why a uniqueSuffix should be added
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname);
  },
});
export const upload = multer({
    storage,
});
