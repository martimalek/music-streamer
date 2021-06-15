import { Schema, model } from 'mongoose';

export const Audio = model('audio', new Schema({
    id: String,
    url: String,
}));
