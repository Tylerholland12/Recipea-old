const Search = require('../models/search');

module.exports = app => {
    // CREATE
    app.get('/search/create', (req, res) => {
        res.render('search-create')
    })

    app.post("/search/create", (req, res) => {
      if (req.user) {
        var search = new Search(req.body);
        search.title = []
        search.readyInMinutes = [];
        search.servings = [];
    
        search
        .save()
        .then(search => {
          return User.findById(req.user._id);
        })
        .then(user => {
          user.searches.unshift(search);
          user.save();
          // REDIRECT TO THE NEW Search
          res.redirect(`/search/${search._id}`);
        })
        .catch(err => {
          console.log(err.message);
        });
      } else {
        res.status(401).send({'401': 'Not authorised'})
      }
    });

    app.get("/search/all", (req, res) => {
        var currentUser = req.user;
        console.log(req.cookies);
        Search.find({}).lean().populate('author')
        .then(searches => {
          res.render('search-all', { searches, currentUser });
        })
        .catch(err => {
          console.log(err.message);
        })
    })

    app.get("/search/:id", (req, res) => {
        var currentUser = req.user;
        // LOOK UP 
        Search
        .findById(req.params.id)
        .populate('comments')
        .lean()
        .then(search => {
          res.render("search-show", { search, currentUser});
        })
        .catch(err => {
          console.log(err.message);
        });
      });
    
  };