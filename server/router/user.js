import { Router } from 'express'
import {
    login,
    register,
    listUser
} from '../middleware/user.js'
import {
    createToken,
    sendToken
} from '../middleware/tokens.js'
import {
    connect,
    disconnect
} from './../database/connexion.js'

/**
 * @swagger
 * tags:
 *  name: user
 *  description : USER TAG FOR FUN
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Authenticates a user and returns a token if credentials are valid.
 *     tags: 
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: Sofiane
 *               password:
 *                 type: string
 *                 example: abcd@12345
 *     responses:
 *       200:
 *         description: Success, returns a token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: boolean
 *                   example: true
 *                 value:
 *                   type: string
 *                   example: "jwt_token_value"
 *       401:
 *         description: Unauthorized, wrong username or password.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 login:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: bad login
 *       403:
 *         description: Forbidden, missing arguments.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 login:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: argument(s) missing
 *       500:
 *         description: Server error, issue with token generation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: boolean
 *                   example: false
 *                 login:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Problem Server with the Token
 */
// /api/user
const user = Router()
// /api/user/login
.post('/login', login, createToken, sendToken)
.post('/register', connect, register, disconnect, (req,res) => res.json(req.responseData))
.get('/test', connect, listUser, disconnect, (_,res) => res.json({ok:true}))

export default user