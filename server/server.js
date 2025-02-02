const express = require("express");
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log("Server is running at port 3000");
});
