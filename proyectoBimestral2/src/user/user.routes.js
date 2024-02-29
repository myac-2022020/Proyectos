'use strict'

import express from 'express'
import {  validateJwt, isAdmin } from '../middlewares/validate.jwt.js'
import { test, register, login, update, deleteU, changeRole } from './user.controller.js'

const api = express.Router()


api.get('/test', [validateJwt, isAdmin], test)
api.put('/update/:id', [validateJwt], update)
api.delete('/delete/:id', [validateJwt], deleteU)
api.post('/register', register)
api.post('/login', login)
api.put('/changeRole/:id',[validateJwt, isAdmin], changeRole)

export default api