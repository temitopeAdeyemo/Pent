import AppError from "../../../shared/utils/appError";
import reviewRepository from "../repositories/ReviewRepository";
class createReviewService {
  async execute(data) {
    try {      console.log("data", data);
      const review = await reviewRepository.create(data);

      return review;
    } catch (error) {
      console.log(error)
      throw new AppError("Something went wrong while creating review");
    }
  }
}

export default new createReviewService();
