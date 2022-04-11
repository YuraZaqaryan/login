const { Router } = require('express')
const router = Router()
const User = require('../models/user')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
router.post('/registration',
[
    check('login', 'Invalide login').isLength({ min : 4 }),
    check('password', 'Invalid password').isLength({ min : 4 })
],
async (req, res) => {
    console.log(req.body)
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors : errors.array(),
                message : 'Սխալ մուտքագրված տվյանլներ'
            })
            
        }
        const {login, password} = req.body

        const isUsed = await User.findOne ({ login })
        if(isUsed){
            return res.status(300).json({message : 'This Login is already taken'})
        }
        await User.create({login, password})
        res.status(201).json({message : 'User is successfully create!'})

    } catch (error) { 
        console.log(error)
    }
})
module.exports = router;