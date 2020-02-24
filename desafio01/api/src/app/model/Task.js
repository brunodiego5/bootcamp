import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
});

export default mongoose.model('Task', TaskSchema);
