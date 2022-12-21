const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 5500;

// database
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_lOCAL).then(() => {
  console.log(`Database connection successful`);
});

// listen port
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
