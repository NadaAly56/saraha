import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required:true,
        minLength:[4, 'message is too short'],
        maxLength:[200, 'message is too long'],
    },
    receivedId: {
        type : mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'user'
    }
}, {
    timestamps: true
})

export const messageModel = mongoose.model('message', messageSchema);