import express from 'express'
import { getAllUsers, getUser, signIn, signUp, verifyEmail } from './user.controller.js'
import {emailAuth, userAuth} from '../../middleWares/auth.js'
import { validation } from '../../middleWares/validation.js'
import { addUserSchema } from './user.validation.js'

export const userRouter = express.Router()

userRouter.get('/', userAuth, getAllUsers)
userRouter.get('/profile', userAuth, getUser)
userRouter.post('/signup', validation(addUserSchema), signUp)
userRouter.get('/verify/:token', emailAuth, verifyEmail)
userRouter.post('/signin', signIn)