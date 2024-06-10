import express from "express";
import Product from "../models/product.js";
import uploadImage from "../utils/cloudinary.utils.js";

export const createProduct = async (req, res) => {
  try {
    //   const user = req.user;
    if (req.user.dataValues.whereYouLive.length < 1) {
      return res
        .status(200)
        .json({ error: "please update your profile to access your location" });
    }
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

export const SellerProduct = async (req, res) => {
  try {
    const user = req.user.dataValues.id;
    const Medicals = await Product.findAll({ where: { sellerId: user } });
    if (!Medicals) {
      res.status(200).json({ error: "you dont have any Product" });
    }

    res.status(200).json({ data: Medicals });
  } catch (error) {
    res.status(500).json({ error: "Internal server Error" });
  }
};

export const AllProduct = async (req, res) => {
  try {
    const AllMedicals = await Product.findAll({});
    if (!AllMedicals) {
      res.status(400).json({ error: "The markert are empty" });
    }
    res.status(200).json({ data: AllMedicals });
  } catch (error) {
    res.status(500).json({ error: "Internal server error " });
  }
};
