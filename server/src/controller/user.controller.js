const express = require('express');
const { createUser, getUser, getUserId, deleteUser, authUser } = require('../service/user.service');
const createToken = require('../helper/jwt');

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const data = await createUser(name, surname, email, password);
    res.status(200).send(data)
  } catch (error) {
    res.status(404).send(error.message)
  }
});

router.post("/auth", async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await createUser(email, password);
    const token = createToken(data);

    res.cookie('accessToken', token, {
      secure: true
    })
    res.status(200).send('Success')
  } catch (error) {
    res.status(404).send(error.message)
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
    const result = await getUserId(id)
      ;
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await deleteUser(id)

    res.status(200).send(result)
  } catch (error) {
    res.status(404).send(error.message)
  }
})

module.exports = router;