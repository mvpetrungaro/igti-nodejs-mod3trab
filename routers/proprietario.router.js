import express from "express";
import controller from "../controllers/proprietario.controller.js";

const router = express.Router();

router.get("/", controller.getProprietarios);
router.get("/:id", controller.getProprietario);
router.post("/", controller.createProprietario);
router.put("/", controller.updateProprietario);
router.delete("/:id", controller.deleteProprietario);

export default router;