import reviewHelpfulService from "../services/reviewHelpfulService";
import { successResponse } from "../../../shared/utils/successResponse";
import asyncWrapper from "../../../shared/utils/asyncWrapper";
const { successResMsg } = successResponse;

export default asyncWrapper(async (req, res) => {
  const data = await reviewHelpfulService.execute({ reviewId: req.query.id });
  successResMsg(res, 200, {
    message: "Review marked as helpful successfully",
    data
  });
});
