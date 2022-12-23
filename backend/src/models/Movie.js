import {Schema, model} from "mongoose";

// const actorSchema = new Schema({
//     name: String
// })
const movieSchema = new Schema({
    name : {
        type: String,
        required: true,
        unique: true,
    },
    duration: String,
    date: {
        type: String,
        required: true,
        trim: true
    },
    actors: String,
    genres: String,
    url : String,
    // image: {
    //     data: Buffer,
    //     contentType: String
    // }
},{
    timestamps: true,
    versionKey: false
});


export default model("Movie", movieSchema);