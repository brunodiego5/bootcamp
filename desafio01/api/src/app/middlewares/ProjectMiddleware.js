import Project from '../model/Project';

export default async (req, res, next) => {
  const { id } = req.params;

  const projectExists = await Project.findById(id);

  if (!projectExists) {
    return res.status(400).json({ error: 'Project not exists.' });
  }

  return next();
};
