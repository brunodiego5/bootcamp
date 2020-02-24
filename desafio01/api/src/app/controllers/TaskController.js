import * as Yup from 'yup';

import Task from '../model/Task';

class TaskController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title } = req.body;
    const { project } = req.params;

    const task = await Task.create({ title, project });

    return res.json(task);
  }
}

export default new TaskController();
