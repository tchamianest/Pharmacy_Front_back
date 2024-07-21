import express from "express";
import { userToken } from "../utils/token.generator.js";
import User from "../models/user.js";
import { passwordEncrypt, passwordCompare } from "../utils/encrypt.js";
import uploadImage from "../utils/cloudinary.utils.js";
import { where } from "sequelize";

export const userSignup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, location } = req.body;
    const userPassword = await passwordEncrypt(password);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      location,
      password: userPassword,
    });

    await newUser.save();
    res.status(201).json({
      newUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "internal server error", err: err.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!findUser) {
      return res.status(400).json({
        message: "Fail",
        error: "User with this email doesn't exist, please try another email",
      });
    }
    const passwordCheck = await passwordCompare(
      findUser.dataValues.password,
      password
    );
    if (!passwordCheck) {
      return res.status(400).json({
        message: "Fail",
        error: "Password incorrect",
      });
    }

    const token = await userToken(
      findUser.dataValues.id,
      findUser.dataValues.email
    );

    res.status(200).json({
      message: "Login Successfully",
      token: `Bearer ${token}`,
      user: findUser,
    });
  } catch (err) {
    res.status(500).json({ err: "internal server error" });
  }
};
export const updatePassword = async (req, res) => {
  try {
    const user = req.user;
    const userdata = await User.findOne({ where: { id: user.id } });
    const { oldPassword, newPassword } = req.body;
    const result = await passwordCompare(userdata.password, oldPassword);
    if (!result) {
      return res
        .status(404)
        .json({ status: "fail", message: "the Old password are incorrect " });
    }
    if (newPassword === oldPassword) {
      return res.status(200).json({
        status: "Fail",
        message: "new Password must be different from old one",
      });
    }
    const hashpassword = await passwordEncrypt(newPassword);
    const newone = await userdata.update({ password: hashpassword });

    res
      .status(200)
      .json({ status: "success", message: "password updated successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", error });
  }
};

export const profile = (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({ message: "User profile", user: req.user });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

/// EDIT USER PROFILE
export const editUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      location,
      preferredLanguage,
      whereYouLive,
      email,
    } = req.body;
    if (!firstName && !lastName && !profileImage) {
      return res.status(400).send({
        error: "At least one property is required to update the user",
      });
    }

    if (req.body.password) {
      return res
        .status(400)
        .send({ error: "it is not possible to update  password Here" });
    }

    const user = await User.findOne({
      where: {
        id: req.user.dataValues.id,
      },
      attributes: { exclude: ["password"] },
    });
    let uploadedImage;
    if (!req.file) {
      return res.status(400).json({ Error: "profile image is required" });
    }

    if (req.file) {
      uploadedImage = await uploadImage(req.file.buffer);
    }

    const updatedUser = {
      firstName: firstName || user?.firstName,
      lastName: lastName || user?.lastName,
      profileImage: uploadedImage || user?.profileImage,
      phone: phone || user?.phone,
      location: location || user.location,
      preferredLanguage: preferredLanguage || user?.preferredLanguage,
      whereYouLive: whereYouLive || user?.whereYouLive,
      email: email || user?.email,
    };
    console.log(updatedUser);

    await user.update(updatedUser);
    res.status(201).json({
      message: "user are updated successfully",
      user: user,
    });
  } catch (error) {
    res.status(400).json({ error: "there is an error user are not updated" });
  }
};

// Getting ALL USER
export const GetAllUsers = async (req, res) => {
  try {
    const user = await User.findAll({ attributes: { exclude: ["password"] } });
    res.status(200).json({ status: "success", Users: user });
  } catch (error) {
    res.status(500).json({ error: "error", message: "Internal server Error" });
  }
};
