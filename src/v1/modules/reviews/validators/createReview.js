import { celebrate, Joi, Segments } from "celebrate";
export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    houseAddressNumber: Joi.number().required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.string(),
    images: Joi.string(),
    landlordReview: Joi.string(),
    landlordRating: Joi.string(),
    environmentReview: Joi.string(),
    environmentRating: Joi.string(),
    generalReview: Joi.string().required(),
    houseRating: Joi.number().required(),
    helpfulCount: Joi.number(),
  }),
});
