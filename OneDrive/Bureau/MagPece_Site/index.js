const express = require("express");
var open;
const app = express();
const port = 3000;
app.use(express.json());
const Seqeulize = require("./src/module/db/Seqeulize");
const e = require("express");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/API/:got", function (req, res) {
  const got = req.params.got;
  if (got == "ForgetPass") {
    import("open").then((module) => {
      open = module.default;
      (async () => {
        await open("https://www.eduge.ch");
      })();
    });
  } else if (got == "CONDITION") {
    import("open").then((module) => {
      open = module.default;
      (async () => {
        await open("https://www.eduge.ch");
      })();
    });
  } else if (got == "INSCRIPTION") {
    import("open").then((module) => {
      open = module.default;
      (async () => {
        await open("https://www.eduge.ch");
      })();
    });
  } else if (got == "DISCORD") {
    import("open").then((module) => {
      open = module.default;
      (async () => {
        await open("https://discord.gg/zznVk6t3");
      })();
    });
  } else if (got == "TIKTOK") {
    import("open").then((module) => {
      open = module.default;
      (async () => {
        await open("https://discord.gg/zznVk6t3");
      })();
    });
  } else if (got == "TWIT") {
    import("open").then((module) => {
      open = module.default;
      (async () => {
        await open("https://discord.gg/zznVk6t3");
      })();
    });
  }
  console.log("ljzflzfjzzfljfljzfkfkutfkuf");
});

require("./src/module/db/Seqeulize");
Seqeulize.intData();

require("./src/module/reqGame/SingUp")(app);
app.listen(port, () =>
  console.log(
    `Notre aplication Node est dlmarrle sur : http://localhost:${port}`
  )
);
