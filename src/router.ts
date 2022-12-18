import { Router } from "express";

const router = Router();

//Product

router.get("/product", (req, res) => {
  res.json({ message: "You are the chosen one" });
});
router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
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
