const express = require("express");
const getDb = require("../database.js");
const { ObjectId } = require("mongodb");
const router = express.Router();

const COLLECTION_NAME = "users";

//CREATE
router.post("/create", async (req, res) => {
  if (
    req.body.username &&
    req.body.password &&
    req.body.blogname &&
    req.body.description
  ) {
    const newUser = {
      username: req.body.username,
      password: req.body.password,
      blogname: req.body.blogname,
      description: req.body.description,
    };
    const db = await getDb();
    await db.collection(COLLECTION_NAME).insertOne(newUser);
    res.sendStatus(201);
  } else {
    res.sendStatus(400);
  }
});

//READ
router.get("/:id", async (req, res) => {
  const id = ObjectId(req.params.id);

  const db = await getDb();
  await db.collection(COLLECTION_NAME).findOne({ _id: id }, (err, user) => {
    if (user) {
      res.send(user);
    } else {
      sendStatus(502);
    }
  });
});

//UPDATE
router.put("/update/:id", async (req, res) => {
  const id = ObjectId(req.params.id);
  if (
    req.body.username &&
    req.body.password &&
    req.body.blogname &&
    req.body.description
  ) {
    const updateUser = {
      username: req.body.username,
      password: req.body.password,
      blogname: req.body.blogname,
      description: req.body.description,
    };
    const db = await getDb();
    await db
      .collection(COLLECTION_NAME)
      .updateOne({ _id: id }, { $set: updateUser });
    res.sendStatus(updateUser);
  } else {
    res.sendStatus(400);
  }
});

//DELETE
router.delete("/delete/:id", async (req, res) => {
  const id = ObjectId(req.params.id);
  const db = await getDb();

  await db.collection(COLLECTION_NAME).deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});
module.exports = router;
