import jwt from 'jsonwebtoken'
const generateToken = (payload)=> {
    return jwt.sign(payload, process.env.KEY)
}
 function catchAsyncError  (fn){
    return (req, res, next) => {
         fn(req, res).catch((err)=>{
            next(err.message)
        })
    }
}

export {
    generateToken,
    catchAsyncError
}