import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

//Product

router.get("/product", (req, res) => {
  res.json({ message: "You are the chosen one" });
});
router.get("/product/:id", () => {});
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);
router.post("/product", body("name").isString(), handleInputErrors, () => {});
router.delete("/product/:id", () => {});

//Update

router.get("/update", () => {});
router.get("/update/:id", body("id").isUUID(), () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  handleInputErrors,
  () => {}
);
router.post(
  "/update",
  body("title").exists(),
  body("body").exists(),
  handleInputErrors,
  () => {}
);
router.delete("/update/:id", () => {});

//Update points

router.get("/updateinfo", () => {});
router.get("/updateinfo/:id", body("id").isUUID(), () => {});
router.put(
  "/updateinfo/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  handleInputErrors,
  () => {}
);
router.post(
  "/updateinfo",
  body("name").exists().isString(),
  body("description").exists().isString(),
  body("UpdateInfoId").exists().isString(),
  handleInputErrors,
  () => {}
);
router.delete("/updateinfo/:id", () => {});

export { router };
