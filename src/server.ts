import express from "express";
import { router } from "./router";
import morgan from "morgan";
import cors from "cors";
import { secureAccess } from "./modules/auth";
import { createNewUser, signIn } from "./handlers/user";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  req.sssh_secret = "doggy";
  next();
});

app.get("/", (req, res) => {
  console.log("Hello");
  res.status(200);
  res.json({ message: "Hello" });
});

app.use("/api", secureAccess, router);
app.post("/user", createNewUser);
app.post("/signin", signIn);

app.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.status(401).json({ message: "unauthorised user" });
  } else if (err.type === "input") {
    res.status(400).json({ message: "Invalid input" });
  } else {
    res.status(500).json({ message: "An error of errors" });
  }
});

export { app };
