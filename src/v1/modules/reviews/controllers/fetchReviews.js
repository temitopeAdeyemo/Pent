import fetchReviewsService from "../services/fetchReviewsService";
import { successResponse } from "../../../shared/utils/successResponse";
import asyncWrapper from "../../../shared/utils/asyncWrapper";
const { successResMsg } = successResponse;

export default asyncWrapper(async (req, res, next) => {
  const reviews = await fetchReviewsService.execute();
  successResMsg(res, 200, {
    data: reviews,
  });
});
