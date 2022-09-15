import Posts from "../models/posts.js";
import { Sequelize } from "sequelize";
import mysql from "mysql2/promise";
import Users from "../models/users.js";

const database = {};

const credent = {
  host: "localhost",
  user: "root",
  password: "",
  database: "registras",
};

try {
  const connection = await mysql.createConnection({
    host: credent.host,
    user: credent.user,
    password: credent.password,
  });

  await connection.query("CREATE DATABASE IF NOT EXISTS " + credent.database);

  const sequelize = new Sequelize(
    credent.database,
    credent.user,
    credent.password,
    { dialect: "mysql" }
  );

  database.Posts = Posts(sequelize);
  database.Users = Users(sequelize);


  await sequelize.sync({ alter: true });
} catch (error) {
  console.log(error);
  console.log("Nepavyko prisijungti prie domenu bazes");
}

export default database;
