import mongoose from 'mongoose';
import BadRequestError from './BadRequestError';

export default class ValidationError extends BadRequestError {
  constructor(err: mongoose.Error.ValidationError) {
    const error = Object.keys(err.errors)
      .map((key) => err.errors[key].message)
      .join('; ');

    super(error);
  }
}
