const router = require('express').Router();
const { Article } = require('../../models');
const withAuth = require('../../utils/auth');

//create a new article
router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Article.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

//edit an article
//router.put(...)

//delete an article
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Article.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No article found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
