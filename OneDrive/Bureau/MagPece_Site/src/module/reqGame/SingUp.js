const { User } = require("../db/Seqeulize");
const bcrypt = require("bcrypt");
const Mailer = require("../Model/Mailer");

let sujet = "Bienvenu dans MagPece";
let contenu = `Votre inscription a bien été prise en charge et votre compte est activé !`;
Mailer("mohammad.izdpn@eduge.ch", sujet, contenu);

module.exports = (app) => {
  app.post("/API/Game/SignUp", (req, res) => {
    const KeySecuriteRob = "1019142332@#82837465Q##°°@PWOEIRUTZ###als**kdjfhg";
    if (req.body.KeySecuriteRob == KeySecuriteRob) {
      let userData = req.body;
      console.log(userData.username);
      User.findOne({
        where: { username: userData.username, Mail: userData.Mail },
      })
        .then((result) => {
          console.log(result.password);
          bcrypt.compare(userData.password, result.password).then((valide) => {
            if (!valide) {
              return res.status(401).json({
                mesage: "Ce compte n'existe pas ou le mot de passe est fausse",
                data: false,
              });
            }
            console.log(result.UserID + "ewkfbw");
            if (result.UserID == null) {
              let sujet = "Bienvenu dans MagPece";
              let contenu = `Votre inscription a bien été prise en charge et votre compte est activé !`;
              Mailer(userData.Mail, sujet, contenu);
              console.log("MailEnvyer");
            }
            res.json({ mesage: "Conncted true", data: true });
          });
        })
        .catch((err) => {
          return res.status(401).json({
            mesage: "Ce compte n'existe pas ou le mot de passe est fausse",
            data: err,
          });
        });
    } else {
      console.log(req.body);
      return res.status(401).json({
        mesage: "Vous n'avez pas le droit de acceder a ces info",
        data: false,
      });
    }
  });
};
