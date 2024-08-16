import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import { v4 as uuidv4 } from "uuid";

config();
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

const uploadImage = async (ImageData) => {
  const base64Image = ImageData.toString("base64");
  const uniquePublicId = `image_${uuidv4()}`;
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      `data:image/png;base64,${base64Image}`,
      { public_id: uniquePublicId },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          const url = result?.secure_url;
          resolve(url);
        }
      }
    );
  });
};

export default uploadImage;
