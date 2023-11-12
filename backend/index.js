import { dbConnection } from "./database/dbConnection.js";
import express from "express";
import { userRouter } from "./src/modules/users/user.router.js";
import dotenv from "dotenv";
import msgRouter from "./src/modules/messages/messge.router.js";
import cors from "cors"
const app = express();
const corsOptions = {
  origin: 'http://localhost:4200', // Replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you need to send cookies or authentication headers
};

app.use(express.json());
app.use(cors(corsOptions))
app.use("/user", userRouter);
app.use("/message", msgRouter);
app.use((error, req, res, next) => {
  res.status(400).json({
    error,
  });
});
dotenv.config();
dbConnection();
app.listen(process.env.PORT, () => {
  console.log("Server started");
});
