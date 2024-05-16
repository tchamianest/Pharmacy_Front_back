import multer from "multer";

const fileFilter = (req, file, cb) => cb(null, true);

const multerupload = multer({ fileFilter });
export default multerupload;
