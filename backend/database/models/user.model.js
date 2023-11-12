import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [4, 'Name is too short'],
        maxlength: [20, 'Name is too long'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(v);
            },
            message: 'password must be A-Z a-z 0-9 9>'
          }
    },
    age: {
        type: Number,
        required: true,
        min: 10,
        max: 60,      
    },
    emailConfirmed: {
        type: Boolean,
        default: false,
    }
});

export const userModel = mongoose.model('user', userSchema);
