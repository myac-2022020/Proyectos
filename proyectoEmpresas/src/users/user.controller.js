'use strict'

import User from './user.model.js'
import { checkPassword, encrypt } from '../utils/validator.js'
import { generateJWT } from '../utils/jwt.js'

export const test = (req, res)=>{
    return res.send('Hello world')
}

export const register = async(req, res)=>{
    try {
        let data = req.body
        data.password = await encrypt(data.password)
        data.role = 'ADMIN'
        let user = new User(data)
        await user.save()
        return res.send({message: 'Registered successfully'})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error to register user'})
    }
}

export const login = async(req, res) => {
    try{
        let { username, password } = req.body 
        let user = await User.findOne({ username })
        if(user && await checkPassword(password, user.password)){
            let loggedUser = { 
                uid: user._id,
                username: user.username,
                name: user.name,
                role: user.role
            }
            let token = await generateJWT(loggedUser)
            return res.send({message: `Welcome ${user.name}`, loggedUser, token})
        }
        return res.status(404).send({message: 'Invalid Credentials'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error to login'})
    }
}