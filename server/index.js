const express = require("express");
const app = express();
const cors = require("cors");
 const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

//app.options('*', cors());  // allow preflight
// Allow requests from localhost:3000
//app.use(cors({
  //origin: 'http://localhost:3000',
  //credentials: true // if you're using cookies or authorization headers
//}));
// Allow CORS from all origins (dev only — for production, allow specific origin)
//app.use(cors({
  //origin: 'http://localhost:3000',  // frontend URL
  //credentials: true
//}));
// Handle preflight requests
//app.options('*', cors({
  //origin: 'http://localhost:3000',
  //credentials: true
//}));

app.use(express.json());


const config = require("./db/config");
const Home = require("./controllers/controller");
const LoginRoute = require("./routes/LoginRoute");
const RegisterRoute = require("./routes/RegisterRoute");
const verifyToken = require("./Middleware/middleware");
const RecipeRoute = require("./routes/RecipeRoute");
const ForgotPassword = require("./routes/forgotPassword");

app.use("/auth", LoginRoute);
app.use("/auth", RegisterRoute);
app.use("/auth", RecipeRoute);
app.use("/auth", router);
app.use("/auth", ForgotPassword);

router.get("/", verifyToken, Home.Home);

module.exports = router;

if (config) {
  app.listen(process.env.PORT, () => {
    console.log(`Server Started on port ${process.env.PORT}`);
  });
}
