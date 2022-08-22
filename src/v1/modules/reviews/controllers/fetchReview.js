import fetchReviewService from "../services/fetchReviewService";
import { successResponse } from "../../../shared/utils/successResponse";
import asyncWrapper from "../../../shared/utils/asyncWrapper";
const { successResMsg } = successResponse;

export default asyncWrapper(async (req, res, next) => {
  const review = await fetchReviewService.execute({ reviewId: req.query._id });
  successResMsg(res, 200, {
    data: review,
  });
});
