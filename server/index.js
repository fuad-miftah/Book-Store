import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import bookRoute from './routes/book.js';
import salesRoute from './routes/sales.js';
import bodyParser from "body-parser";
import cors from "cors"
import connectToDatabase from "./config/db.js";
import cookieParser from "cookie-parser";

//const cors = require('cors');
//const cookieParser = require("cookie-parser");


dotenv.config();
const app = express();
const port = process.env.PORT || 8000
//app.use(bodyParser.json());

//app.use(cors({ origin: 'www.example.com' }));
connectToDatabase();

app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use('/api/book', bookRoute);
app.use('/api/sales', salesRoute);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  console.log(`api started at port ${port}`)
})  