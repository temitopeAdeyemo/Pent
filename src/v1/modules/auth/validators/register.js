import { celebrate, Joi, Segments } from "celebrate";

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
});
