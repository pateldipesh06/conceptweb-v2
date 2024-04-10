import mongoose, { Schema } from "mongoose";

const TagsSchema = new Schema(
    {
        name: String,
        level: Number
    }, {
    timestamps: true,
}
);



const Tags = mongoose.models.Tags || mongoose.model("Tags", TagsSchema);

export default Tags;