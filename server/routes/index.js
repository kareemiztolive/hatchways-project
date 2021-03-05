const express = require("express");
const router = express.Router();
const databaseSettings = require("./knexfile.js").development;
const knex = require("knex")(databaseSettings);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "authenticate this user please";

router.get("/welcome", function (req, res, next) {
  res.status(200).send({ welcomeMessage: "Step 1 (completed)" });
});

router.post("/register", function (req, res, next) {
  const createdUser = knex("users")
    .where({ username: req.body.username })
    .select();
  const password = req.body.password;
  const email = req.body.email;

  if (createdUser.length > 0) {
    res.status(400).send({ response: "Username already taken" });
  } else if (createdUser.length === 0 && password.length >= 6 && email) {
    bcrypt.hash(password, 15).then((hashedPassword) => {
      return knex("users")
        .insert({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
        })
        .returning(["id", "username", "email"])
        .then((users) => {
          res
            .status(201)
            .json({ response: "Successful Registration", user: users[0] });
        });
    });
  } else {
    res.status(400).send({ response: "Registration failed" });
  }
});

router.post("/login", function (req, res, next) {
  knex("users")
    .where({ email: req.body.email })
    .select()
    .then((user) => {
      if (!user) {
        response.status(400).send({
          error: "No user with that email",
        });
      } else {
        return bcrypt
          .compare(req.body.password, user.password_digest)
          .then((authenticateUser) => {
            if (!authenticateUser) {
              res.status(400).send({
                error: "Unauthorized Access!",
              });
            } else {
              return jwt.sign(user, SECRET, (error, token) => {
                res.status(200).json({ token });
              });
            }
          });
      }
    });
});

router.get("/verifyuser", (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, SECRET, (error, secureToken) => {
    if (error) {
      res.status(401).send({
        message: "Unauthorized Access!",
      });
    } else {
      res.status(200).json({
        id: secureToken.id,
        username: secureToken.username,
        email: secureToken.email,
      });
    }
  });
});

module.exports = router;
