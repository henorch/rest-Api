const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

const { User } = require('../models/user');


router.get('/', async (req, res) => {
    const user = await User.find().select('name email')

    if(!user)
    return res.status(500).send('no user avaliable')

    res.status(200).send(user)
})

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id).select('name email')

    if(!user)
    return res.status(500).send('no user avaliable')

    res.status(200).send(user)
})


/** post API */
router.post('/', async(req, res) =>{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
    })

    if(!user)
    return res.status(404).send('user not create')

    user = await user.save();
    res.status(200).send(user)
} )


/** PUT API */
router.put('/:id', async (req, res) => {
    let user = await User.findByIdAndUpdate(req.params.id, { 
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
    }, { new: true})
    
    if(!user)
    return res.status(500).send('no user avaliable')

    res.status(200).send(user)
})

module.exports = router