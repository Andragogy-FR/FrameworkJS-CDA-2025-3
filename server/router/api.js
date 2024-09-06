import { Router } from 'express'
import user from './user.js'


// /api
const api = Router()
// /api/welcome

/**
 * @swagger
 * tags:
 *  name: api
 *  description : API TAG FOR FUN
 */

/**
 * @swagger
 * /api/welcome:
 *   get:
 *     summary: Say welcome
 *     tags: 
 *       - api
 *     responses:
 *       200:
 *         description: Say welcome
 *       500:
 *         description: Automatic answers - server crashed
 */
api.get('/welcome', (_req, res) => {
    res.send('Welcome you')
})

.post('/welcome', (req, res) => typeof req?.body?.username === "string"
        ? res.send(`Welcome to ${req.body.username}`)
        : res.status(404).send('Username argument missing !')
)
// /api/user
.use('/user', user)


// (req, res, next)
// req : requête => si pas besoin = _req
// res : reponse => si pas besoin = _res
// next : middleware suivant => si pas besoin supprimer

export default api