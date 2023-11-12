import express from 'express'
import { deleteMsg, getUserMsgs, sendMsg } from './message.controller.js'
import {userAuth} from '../../middleWares/auth.js'
import { validation } from '../../middleWares/validation.js'
import { msgSchema } from './message.validtion.js'

const msgRouter = express.Router()
msgRouter.post('/:id', validation(msgSchema),  sendMsg)
msgRouter.get('/', userAuth, getUserMsgs)
msgRouter.delete('/', userAuth, deleteMsg)

export default msgRouter