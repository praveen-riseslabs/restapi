import mongoose from 'mongoose';

const EmployeeSchema = mongoose.Schema({
    empId: String,
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    designation: String,
    primaryskill: String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

export default mongoose.model('employees', EmployeeSchema);
//export default DB;