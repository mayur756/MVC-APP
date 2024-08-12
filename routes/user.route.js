const { Router } = require("express");
const { signup,loginup } = require("../controllers/user.control");

const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/login", loginup);

module.exports = userRouter;
