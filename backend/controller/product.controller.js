import express from "express";
import Product from "../models/product.js";
import uploadImage from "../utils/cloudinary.utils.js";

export const createProduct = async (req, res) => {
  try {
    //   const user = req.user;
    const { productName, productDescription, productPrice } = req.body;
    if (!productName || !productPrice || !productDescription) {
      return res.status(400).send({
        error: "All field are required into the product create ",
      });
    }

    let uploadedImage;
    if (!req.file) {
      return res.status(400).json({ Error: "product image is required" });
    }

    if (req.file) {
      uploadedImage = await uploadImage(req.file.buffer);
    }

    const NewProduct = await Product.create({
      sellerId: req.user.dataValues.id,
      location: req.user.dataValues.whereYouLive,
      productName: productName,
      productPrice: productPrice,
      isAvailable: true,
      productDescription: productDescription,
      productPictures: uploadedImage,
    });
    await NewProduct.save();
    res.status(200).json({ body: NewProduct });
  } catch (error) {
    res.status(500).json({ status: "Error", Error: error.message });
  }
};
