import AppError from "../../../shared/utils/appError";
import reviewRepository from "../repositories/ReviewRepository";

class sortByHelpfulCountService {
  async execute() {
    try {
      const reviews = await reviewRepository.findAndSort()
      return reviews;
    } catch (error) {
      console.log(error)
      throw new AppError(error.message, 500);
    }
  }
}

export default new sortByHelpfulCountService();
