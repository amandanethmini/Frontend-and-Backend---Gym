const express = require("express");
const router = express.Router();
const FormData = require("../Model/UserModel");
//insert model


const UserController = require("../Controllers/UserControllers");


router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);
router.get("/:id", UserController.getById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

//export
module.exports = router;