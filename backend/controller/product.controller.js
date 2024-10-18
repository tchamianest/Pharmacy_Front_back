import express from "express";
import Product from "../models/product.js";
import User from "../models/user.js";
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
      SellerName: req.user.dataValues.firstName,
      email: req.user.dataValues.email,
      Phone: req.user.dataValues.phone,
      location: req.user.dataValues.whereYouLive,
      locationName: req.user.dataValues.location,
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
export const UpdateProduct = async (req, res) => {
  try {
    const Productdata = await Product.findOne({
      where: { id: req.body.id, sellerId: req.user.dataValues.id },
    });
    if (req.user.dataValues.id !== Productdata.dataValues.sellerId) {
      return res.status(200).json({
        error: "Error",
        message: "this product is not exist in your stock",
      });
    }
    if (req.body.isAvailable !== undefined) {
      await Productdata.update({ isAvailable: req.body.isAvailable });
      return res.status(200).json({
        message: "Product availability updated successfully",
        product: Productdata,
      });
    }
    const { productName, productPrice, productDescription } = req.body;
    if (!productName && !productPrice && !productDescription) {
      return res.status(400).send({
        error: "atleat update one field are required into the product create ",
      });
    }

    let uploadedImage;

    if (req.file) {
      uploadedImage = await uploadImage(req.file.buffer);
    }
    const updatedproduct = {
      sellerId: req.user.dataValues.id,
      SellerName: req.user.dataValues.firstName,
      email: req.user.dataValues.email,
      Phone: req.user.dataValues.phone,
      location: req.user.dataValues.whereYouLive,
      locationName: req.user.dataValues.location,
      productName: productName || Productdata.dataValues.productName,
      productPrice: productPrice || Productdata.dataValues.productPrice,
      isAvailable: true,
      productDescription:
        productDescription || Productdata.dataValues.productDescription,
      productPictures: uploadedImage || Productdata.dataValues.productPictures,
    };
    await Productdata.update(updatedproduct);
    res.status(201).json({
      message: "Product are updated successfully",
      product: Productdata,
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: "there is an error Product are not updated" });
  }
};
export const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const Productdata = await Product.findOne({
      where: { id, sellerId: req.user.dataValues.id },
    });
    if (req.user.dataValues.id !== Productdata.dataValues.sellerId) {
      return res.status(200).json({
        error: "Error",
        message: "this product is not exist in your stock",
      });
    }

    await Productdata.destroy();
    res.status(201).json({
      message: "Product are Deleted successfully",
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: "there is an error Product are not updated", error });
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
    const AllMedicals = await Product.findAll({ where: { isAvailable: true } });
    if (!AllMedicals) {
      res.status(400).json({ error: "The markert are empty" });
    }
    res.status(200).json({ data: AllMedicals });
  } catch (error) {
    res.status(500).json({ error: "Internal server error " });
  }
};

export const OneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const Productwithuser = await Product.findOne({
      where: { id: id },
      include: {
        model: User,
        as: "seller",
        attributes: [
          "id",
          "firstName",
          "phone",
          "lastName",
          "email",
          "profileImage",
        ],
      },
    });
    res.status(200).json({ data: Productwithuser });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};
