import * as Yup from 'yup';

import Task from '../model/Task';
import Project from '../model/Project';

class TaskController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title } = req.body;
    const { id } = req.params;

    const task = await Task.create({ title, project: id });

    const { _id } = task;

    await Project.findOneAndUpdate(
      { _id: id },
      { $push: { tasks: _id } },
      { new: true }
    );

    return res.json(task);
  }
}

export default new TaskController();
