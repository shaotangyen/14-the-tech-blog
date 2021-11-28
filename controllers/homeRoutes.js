const router = require('express').Router();
const { Article, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  //console.log("I am in");
  try {
    // Get all articles and JOIN with user data
    const articleData = await Article.findAll(
      {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      }
    );
    //console.log(JSON.stringify({ articleData }, null, 2));
    const articles = articleData.map((article) => article.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('homepage', {
      articles,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/article/:id', async (req, res) => {
  try {
    const articleData = await Article.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          include: [{
            model: User,
            attributes: ['name'],
          }]
        },
      ],
    });

    const article = articleData.get({ plain: true });
    console.log(JSON.stringify({ article }, null, 2));

    res.render('article', {
      ...article,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Article }],
    });

    console.log(JSON.stringify({ userData }, null, 2));

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log("=========================");
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    console.log("already logged in");
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    console.log("already logged in");
    return;
  }

  res.render('signup');
});

module.exports = router;