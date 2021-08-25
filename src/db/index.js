import { Sequelize } from "sequelize";

const { PGDATABASE, PGUSERNAME, PGPASSWORD, PGHOST, PGPORT } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSERNAME, PGPASSWORD, {
  host: PGHOST,
  post: PGPORT,
  dialect: "postgres",
});

const testConnection = async () => {
  try {
    sequelize.authenticate().then(() => {
      console.log("db is authenticated");
    });
  } catch (err) {
    console.log(err);
  }
};

testConnection();

export default sequelize;
