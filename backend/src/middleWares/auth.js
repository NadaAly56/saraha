import jwt from 'jsonwebtoken'

const userAuth = (req, res, next)=> {
    const token = req.header('token')
    jwt.verify(token, process.env.KEY, (err, decoded)=>{
        if(err) return res.json(err)
    
        req.id = decoded.user._id
        next()
    })
}

const emailAuth = (req, res, next)=> {
    const {token}= req.params
    jwt.verify(token, process.env.KEY, (err, decoded)=>{
        if(err) return res.json(err)
        
        req.email = decoded.email
        next()
    })
}
export { 
    userAuth,
    emailAuth
}