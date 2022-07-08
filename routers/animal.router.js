import express from "express";
import controller from "../controllers/animal.controller.js";

const router = express.Router();

router.get("/", controller.getAnimais);
router.get("/:id", controller.getAnimal);
router.post("/", controller.createAnimal);
router.put("/", controller.updateAnimal);
router.delete("/:id", controller.deleteAnimal);

export default router;