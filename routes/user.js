const express = require("express");
const router = express.Router();

const userController = require("../controllers/user")

router.post("/", userController.post);

router.get("/", userController.getAll);

router.get("/:userId", userController.getSingle)

router.put("/:userId", userController.update)

router.delete("/:userId", userController.deleteUser)

module.exports = router;