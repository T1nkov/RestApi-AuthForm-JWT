const express = require("express");

const {
  createUser,
  getUser,
  getUserId,
  updateUserById,
} = require("../service/user.service");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const result = await createUser(name, surname, email, password);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await getUser();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getUserId(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const { id } = req.params;
    const data = await updateUserById(id, name, surname, email, password);
    res.status(201).send(data);
  } catch (er) {
    res.status(500).send(er.message);
  }
});
module.exports = router;
