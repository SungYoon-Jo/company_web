import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => {
  res.send("1");
};

videoRouter.get("/watch", handleWatchVideo);

export default videoRouter;
