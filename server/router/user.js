import { Router } from 'express'
import usermiddle from '../middleware/user.js'
import tokens from '../middleware/tokens.js'

const {
    createToken,
    sendToken
} = tokens

// /api/user
const user = Router()
// /api/user/login
.post('/login', usermiddle.login, createToken, sendToken)
.post('/register', (req, res, next) => {})

export default user