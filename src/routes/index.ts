import ping from "./ping.route";
import { Router } from "express";

const router = Router();

router.use(ping);

export default router;
