import { Router } from "express";

const router = Router();

router.get("/ping", (_req, res) => res.json("pong"));

export default router;
