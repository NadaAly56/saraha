import nodemailer from 'nodemailer'
import { html } from './user.email.html.js'
import {generateToken} from '../utilis/utilsFuctions.js'

export const sendEmail = async(options)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })
    const token = generateToken({email: options.email})
    const info = await transporter.sendMail({
        from: `"Webstie" <${process.env.EMAIL}>`,
        to: options.email,
        subject: 'Confirmation',
        html: html(token, options.redirectBaseLink)
    })
}