import dotenv from 'dotenv'
import express from 'express'
import { Core } from './Core/API-core'

dotenv.config()
const App = express()

App.listen( process.env.PORT, async () => {
    console.log( `⚡️ [server]: Hosted at https://:${process.env.HOST}:${process.env.PORT} ⚡️ `)
    await Core(App)
});