import express from "express";
import {
  getSubscribers,
  subscribeUser,
} from "../controllers/subscription.controller.js";

const router = express.Router();

router.get("/", getSubscribers);
router.post("/", subscribeUser);

export default router;
