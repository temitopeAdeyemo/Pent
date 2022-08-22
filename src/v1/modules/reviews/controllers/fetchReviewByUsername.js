import fetchReviewByUsername from "../services/fetchReviewByUsername";
import { successResponse } from "../../../shared/utils/successResponse";
import asyncWrapper from "../../../shared/utils/asyncWrapper";
const { successResMsg } = successResponse;

export default asyncWrapper(async (req, res, next) => {
  const reviews = await fetchReviewByUsername.execute({
    username: req.query.username,
  });
  successResMsg(res, 200, {
    data: reviews,
  });
});
