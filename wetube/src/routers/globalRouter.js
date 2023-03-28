import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => {
  res.send("1");
};

globalRouter.get("/", handleHome);

export default globalRouter;
