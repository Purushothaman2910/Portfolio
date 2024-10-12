import express from 'express'
import { config } from 'dotenv'
import { join , resolve } from 'path'

config()
const app = express()

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(resolve(join(import.meta.dirname , '..','client' , 'dist'))))
    app.use('*' , (req,res) => {
        return res.sendFile(resolve(join(import.meta.dirname , '..','client' , 'dist' , 'index.html')))
    })
}

export default app
