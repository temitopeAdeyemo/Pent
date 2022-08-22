import fetchUserReviewsService from "../services/fetchReviewsByUserId";
import { successResponse } from "../../../shared/utils/successResponse";
import asyncWrapper from "../../../shared/utils/asyncWrapper";
const { successResMsg } = successResponse;

export default asyncWrapper(async (req, res, next) => {
  const reviews = await fetchUserReviewsService.execute({userId: req.user.id});
  successResMsg(res, 200, {
    data: reviews,
  });
});
