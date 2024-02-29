'use strict'

import { Router } from 'express'
import { login, register, test } from './user.controller.js'

const api = Router()

api.get('/test', test)
api.post('/register', register)
api.post('/login', login)

export default api