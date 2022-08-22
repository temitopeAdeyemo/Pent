import sortByHelpfulCountService from "../services/sortReviewByhelpful";
import { successResponse } from "../../../shared/utils/successResponse";
import asyncWrapper from "../../../shared/utils/asyncWrapper";
const { successResMsg } = successResponse;

export default asyncWrapper(async (req, res, next) => {
  const reviews = await sortByHelpfulCountService.execute();
  console.log(reviews)
  successResMsg(res, 200, {
    data: reviews,
  });
});
