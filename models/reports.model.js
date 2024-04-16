import mongoose from 'mongoose';

const ReportsSchema = mongoose.Schema({
    name: String,
    description: String,
    label: String,
    downlodalink: String,
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

export default mongoose.model('reports', ReportsSchema);
//export default DB;