import mongoose from "mongoose"

export const dbConnection = ()=> {
    mongoose.connect(process.env.DBCONNECTION).then(()=>{
        console.log('DB Connected');
    }).catch((err)=>{
        console.log("DB Not Connected: " + err);
    })
}