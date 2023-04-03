import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connection DB");
const handleError = (error) => console.error("DB error: ", error);

db.on("error", handleError);
db.once("open", handleOpen);
