import express from "express";
import db from "../../db/models/index.js";
const Product = db.Product;
const Review = db.Review;
import s from "sequelize";
const { Op } = s;

const router = express.Router();

export default router;
