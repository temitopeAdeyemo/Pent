import sortByDateService from "../services/sortReviewByDate";
import { successResponse } from "../../../shared/utils/successResponse";
import asyncWrapper from "../../../shared/utils/asyncWrapper";
const { successResMsg } = successResponse;

export default asyncWrapper(async (req, res, next) => {
  const reviews = await sortByDateService.execute();
  successResMsg(res, 200, {
    data: reviews,
  });
});
