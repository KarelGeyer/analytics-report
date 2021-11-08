import mongoose from 'mongoose';
import Joi from 'joi';

const EventModel = mongoose.Schema(
  {
    name: String,
    description: String,
    author: String,
    date: String,
  },
  {
    timestamps: true,
  },
);

export const EventSchema = Joi.object({
  name: Joi.string().required().alphanum().min(5).max(20),
  previousName: Joi.string().alphanum().min(5).max(20),
  description: Joi.string().max(50),
  author: Joi.string().required().email(),
  date: Joi.string().required(),
})

export default mongoose.model('EventModel', EventModel);
