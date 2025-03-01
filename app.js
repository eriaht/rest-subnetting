const express = require("express");
// Controllers
const subnetController = require("./controllers");

const app = express();
app.use(express.static(`${__dirname}/public`));

// Router
const subnetRouter = express.Router();

subnetRouter.route("/").get(subnetController.getSubnet);

app.use("/api/v1/subnetting", subnetRouter);

app.listen(3000, "localhost", (err) => {
  console.log("Server is running\nReady to subnet!\nhttp://localhost:3000");
});
