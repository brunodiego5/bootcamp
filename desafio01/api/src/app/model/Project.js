import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});

export default mongoose.model('Project', ProjectSchema);
