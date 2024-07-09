import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import testRouter from "./routes/test.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/test", testRouter);
app.use(cookieParser())
app.listen(8800, () => {
  console.log("Server is running");
});
