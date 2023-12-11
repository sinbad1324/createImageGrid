const { Sequelize, DataTypes } = require("sequelize");
const UserTable = require("../Model/CreateUser");
const bcrypt = require("bcrypt");

const sequeli_ze = new Sequelize("User", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  logging: false,
});

sequeli_ze
  .authenticate()
  .then((_) => console.log("trueeeeeeeeeeeeeeeeeeeeee"))
  .catch((err) => console.error("falssssssssssssssssssssss" + err));

const User = UserTable(sequeli_ze, DataTypes);

const intData = () => {
  sequeli_ze.sync({ force: true }).then((_) => {
    User.create({
      username: "admin",
      password: bcrypt.hashSync("hash", bcrypt.genSaltSync(12)),
      Mail: "mohammad.izdpn@eduge.ch",
      UserID: null,
    }).then((user) => console.log(user.toJSON()));

    console.log("La base de donner marche très bien");
  });
};

module.exports = {
  intData,
  User,
};
