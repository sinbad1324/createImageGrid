module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        unique: {
          msg: "le nom est deja pris",
        },
        validate: {
          len: {
            args: [2, 250],
            msg: "Votre nom doit être plus grand que 3 et plus petit que 250 lettres",
          },
        },
      },
      Mail: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "Doit être un e-mail valide",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
      },
      UserID: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
      freezeTableName: true,
    }
  );
};
