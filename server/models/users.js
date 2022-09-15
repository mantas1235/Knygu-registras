import { DataTypes } from "sequelize";

const Users = (sequelize) => {
  const Schema = {
    Vardas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Pavarde: {
      type: DataTypes.STRING,
      allowNull: false,

    },
   Pastas: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    Slaptazodis: {
      type: DataTypes.STRING,
      allowNull: false,

    }
  };

  return sequelize.define("users", Schema);
};

export default Users;
