const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//create a new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment: req.body.newComment,
      user_id: req.session.user_id,
      article_id: req.body.articleId,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
