import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import api from './router/api.js'
import expressStaticGzip from 'express-static-gzip'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app
.use(helmet())
.use(helmet.contentSecurityPolicy(

))
.use(helmet.crossOriginResourcePolicy())
.use(helmet.hidePoweredBy())
.use(express.urlencoded({extended: true}))
.use(bodyParser.json())
//.use(express.json())
.use(morgan(':remote-addr - :method :url :status :res[content-length] - :response-time ms'))
.use('/api', api)
.use(expressStaticGzip(
    path.join(__dirname, "../client/dist"),{
        enableBrotli: false
    }
))
.get('*', (_, res) => {
    res.sendFile(
        path.join(__dirname, "../client/dist/index.html")
    )
})
.listen(3000, () => {
    console.log("Server listen on port 3000")
})
.on('error', (err) => {
    console.error(err)
    app.listen(3000, () => {
        console.log("Server restart on port 3000")
    })
})
