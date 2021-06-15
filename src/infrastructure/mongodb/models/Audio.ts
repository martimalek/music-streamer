import { Schema, model } from 'mongoose';

export const Item = model('audio', new Schema({
    id: String,
    url: String,
}));
