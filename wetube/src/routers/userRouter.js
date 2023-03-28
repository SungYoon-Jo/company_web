import express from "express";

const userRouter = express.Router();

const handleEdite = (req, res) => {
  res.send("1");
};

userRouter.get("/edit", handleEdite);

export default userRouter;
