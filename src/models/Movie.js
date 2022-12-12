import {Schema, model} from "mongoose";

const actorSchema = new Schema({
    name: String
})
const movieSchema = new Schema({
    name : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    duration: String,
    date: {
        type: String,
        required: true,
        trim: true
    },
    actors: [{type: String, required: true}],
    genres: [String],
    image: {
        data: Buffer,
        contentType: String
    }
},{
    timestamps: true,
    versionKey: false
});

export const actor = model("actor", actorSchema);

export default model("Movie", movieSchema);