// mBMR6LXFceQLi21H

const app = require("./app");

const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
const DB_HOST =
  "mongodb+srv://Olga:mBMR6LXFceQLi21H@cluster0.asa0fxs.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000), console.log("Database connection successful"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
