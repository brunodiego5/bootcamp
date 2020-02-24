import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
});

export default mongoose.model('Task', TaskSchema);
