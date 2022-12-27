import { Router } from "express";
import { body, validationResult } from "express-validator";

const router = Router();

//Product

router.get("/product", (req, res) => {
  res.json({ message: "You are the chosen one" });
});
router.get("/product/:id", () => {});
router.put("/product/:id", body("name").isString(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  }
});
router.post("/product", () => {});
router.delete("/product/:id", () => {});

//Update

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update", () => {});
router.delete("/update/:id", () => {});

//Update

router.get("/updateinfo", () => {});
router.get("/updateinfo/:id", () => {});
router.put("/updateinfo/:id", () => {});
router.post("/updateinfo", () => {});
router.delete("/updateinfo/:id", () => {});

export { router };
