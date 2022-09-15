import { DataTypes } from "sequelize";

const Posts = (sequelize) => {
  const Schema = {
    Pavadinimas: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Autorius: {
      type: DataTypes.STRING,
    },
    Virselio_autorius: {
      type: DataTypes.STRING,
    },
    ISBN_kodas: {
      type: DataTypes.STRING(13),
    },
   Nuotrauka: {
      type: DataTypes.STRING,
    },
  };

  return sequelize.define("posts", Schema);
};

export default Posts;
