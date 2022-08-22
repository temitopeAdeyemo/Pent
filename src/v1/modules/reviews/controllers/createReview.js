import createReviewService from "../services/createReviewService";
import { successResponse } from "../../../shared/utils/successResponse";
import asyncWrapper from "../../../shared/utils/asyncWrapper";
const { successResMsg } = successResponse;

export default asyncWrapper(async (req, res, next) => {
  console.log(req.body)
  const review = await createReviewService.execute({ ...req.body, reviewBy: req.user._id });

  successResMsg(res, 201, {
    message: "Your review has been posted successfully",
    data: review,
  });
});
