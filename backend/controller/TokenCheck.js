import express from "express";

export const tokenChecker = (req, res) => {
  res.status(200).json({ check: true });
};
