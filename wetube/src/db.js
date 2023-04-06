import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connection DB");
const handleError = (error) => console.error("DB error: ", error);

db.on("error", handleError);
db.once("open", handleOpen);
