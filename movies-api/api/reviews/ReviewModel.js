import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    author: { type: String },
    review: { type: String },
    rating: { type: Number },
    movieId: { type: String}
});

export default mongoose.model('Review', ReviewSchema);