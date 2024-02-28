import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    password: String,
    otp: {
        type:Number,
        expires:'10s',
        index:true
    },
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

export default mongoose.model('users', UserSchema);
//export default DB;