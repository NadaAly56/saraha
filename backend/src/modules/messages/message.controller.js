import { messageModel } from "../../../database/models/message.model.js"
import { catchAsyncError } from "../../utilis/utilsFuctions.js"

const sendMsg = catchAsyncError(
    async(req, res) => {
        const {id} = req.params
        const {message} = req.body
        const msgObj = await messageModel.insertMany({message, receivedId:id})
        res.json({msg: 'success', msgObj})
    }
)

const getUserMsgs = catchAsyncError(async(req, res) => {
    const id = req.id
    const msgs = await messageModel.find({receivedId:id}).populate('receivedId')
    res.json({msg:'success',msgs})
})

const deleteMsg = catchAsyncError(
    async(req, res) => {
        const _id = req.header('id')
        const msgs = await messageModel.findByIdAndDelete(_id)
        res.json({msg:'success',msgs})
    }
)
export {
    sendMsg,
    getUserMsgs,
    deleteMsg
}
