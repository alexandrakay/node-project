const express = require('express')
const router = express.Router()
// const router = require('express').Router()

const User = require('./userDb.js')


router.get("/", (req, res) => {
  User.get(req.query)
    .then((users) => res.status(200).json(users))
      //   res.status(201).json(user);
      
    
    .catch((err) => 
      res.status(500).json(`${err}`)
    )
})

router.get('/:id', (req, res) => {
    User.getById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(`${err}`))
})

router.delete('/:id', (req, res) => {
    User.remove(req.params.id)
    .then(() => res.status(200).json({ message: `user ${req.params.id}  is destroyed`}))
    .catch(err => res.status(500).json(`${err}`))
})

router.post('/', (req, res) => {

    User.insert({name: req.body.name})
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: "user could not be created"})
    })
  });
  

router.put('/:id', (req, res) => {
    const changes = req.body
  
    Users.update(req.params.id, changes)
    .then(updated => {
      res.status(200).json(updated)
    })
    .catch(err => {
      console.log(err)
    })
  });


module.exports = router;
