import mongoose from 'mongoose';

const DocumentsSchema = mongoose.Schema({
    name: String,
    description: String,
    label: String,
    downlodalink: String,
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

export default mongoose.model('documents', DocumentsSchema);
//export default DB;