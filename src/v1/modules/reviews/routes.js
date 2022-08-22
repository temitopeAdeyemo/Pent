import express from "express";
import {
  createReview,
  fetchReviews,
  fetchReview,
  fetchUserReviews,
  sortByHelpful,
  sortByDate,
  reviewHelpful,
} from "./controllers";

import { createReviewValidator } from "./validators";

import auth from "../../shared/middlewares/authMiddlewares";

const router = express.Router();

router.post("/create", [auth, createReviewValidator], createReview);
router.get("/fetch-all", fetchReviews);
router.get("/fetch-one", fetchReview);
router.get("/fetch-by-user", auth, fetchUserReviews);
router.get("/sort-by-helpful", sortByHelpful);
router.get("/sort-by-date", sortByDate);
router.patch("/mark-as-helpful", reviewHelpful);

export default router;
