import mongoose from 'mongoose';

const DocumentsSchema = mongoose.Schema({
    name: String,
    description: String,
    forwhom: String,
    attachment: String,
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

export default mongoose.model('documents', DocumentsSchema);
//export default DB;