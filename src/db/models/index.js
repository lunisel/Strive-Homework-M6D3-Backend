import Product from "./Products.js";
import Review from "./Review.js";
import sequelize from "../index.js";
import Category from "./Category.js";

Review.belongsTo(Product);
Product.hasMany(Review);

Product.belongsTo(Category);
Category.hasMany(Product);

export default { Product, sequelize, Review, Category };
