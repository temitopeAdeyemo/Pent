import express from "express";
import authRoutes from "./modules/auth/routes";
import reviewRoutes from "./modules/reviews/routes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/review", reviewRoutes);

export default router;
