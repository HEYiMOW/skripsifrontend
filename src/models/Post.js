import mongoose from "mongoose";

const {Schema} = mongoose

const PostSchema = new Schema({
    title:{
        type: String,
        unique: true,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
},
    {timestamps : true}
)

export default mongoose.model("Post", PostSchema)