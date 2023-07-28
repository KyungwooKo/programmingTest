const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

const Mongoclient = require("mongodb").MongoClient;
MongoClient.connect("mongodb+srv://eyeofthei21:2pnLmlTAsOzhrOQk@cluster0.48iymet.mongodb.net/test", function (에러, client) {});
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/register", (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  newUser.save((err) => {
    if (err) {
      res.json({ status: "error" });
    } else {
      res.json({ status: "success" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email, password }, (err, foundUser) => {
    if (err) {
      res.json({ status: "error" });
    } else {
      if (foundUser) {
        req.session.user = foundUser;
        res.json({ status: "success" });
      } else {
        res.json({ status: "error" });
      }
    }
  });
});

app.listen(5500, () => {
  console.log("Server started on port 5500");
});

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
