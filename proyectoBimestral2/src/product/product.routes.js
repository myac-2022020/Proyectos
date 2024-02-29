'use strict'

import { Router } from 'express'
import { createProduct, deleteProduct, listProducts, searchProduct, test, updateProduct } from './product.controller.js'


const api = Router()

api.get('/test', test)
api.post('/create', createProduct)
api.put('/update/:id', updateProduct)
api.delete('/delete/:id', deleteProduct)
api.post('/search', searchProduct)
api.get('/list', listProducts)

export default api