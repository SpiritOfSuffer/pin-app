import mongoose from "mongoose";

const Schema = mongoose.Schema;
const PinSchema = new Schema(
{
    title     : {type: String},
    text      : {type: String, required: true},
    color     : {type: String},
    createdAt : {type: Date}
});
const Pin = mongoose.model('Pin', PinSchema);