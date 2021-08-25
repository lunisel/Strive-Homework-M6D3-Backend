import Product from "./Products.js";
import Review from "./Review.js";
import sequelize from "../index.js";

Review.belongsTo(Product);
Product.hasMany(Review);

export default { Product, sequelize, Review };
