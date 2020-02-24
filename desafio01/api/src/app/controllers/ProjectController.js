import * as Yup from 'yup';

import Project from '../model/Project';

class ProjectController {
  async index(req, res) {
    const projects = await Project.find();

    return res.json(projects);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title } = req.body;

    const projectExists = await Project.find({
      title,
    });

    if (projectExists) {
      return res.status(400).json({ error: 'Project already existis.' });
    }

    const project = await Project.create({ title });

    return res.json(project);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title } = req.body;
    const { id } = req.params;

    const project = await Project.findByIdAndUpdate(id, { title });

    return res.json(project);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Project.findOneAndDelete(id);

    return res.json();
  }
}

export default new ProjectController();
