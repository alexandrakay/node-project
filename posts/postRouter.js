const express = require('express');

const router = express.Router();

const Post = require("./postDb")


router.get('/', (req, res) => {
    Post.get()
      .then(posts => {
        res.status(201).json(posts)
      })
      .catch(err => {
        console.log(err)
      })
  
    });


router.get('/:id', (req, res) => {
    Post.getById(req.params.id)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(500).json(`${err}`))
})

router.post('/:id', (req, res) => {
    const newPost = { user_id: req.params.id, ...req.body}
    Post.insert(newPost)
    .then(post => {
      res.status(200).json(post)
    })
    .catch(err => {
    //   console.log(err)
      res.status(500).json({message: "can't crete post"})
    })
  });

  router.delete('/:id', (req, res) => {
    Post.remove(req.params.id)
    .then(() => res.status(200).json({ message: `post ${req.params.id}  is destroyed`}))
    .catch(err => res.status(500).json(`${err}`))
})
  

    module.exports = router;