import express from 'express'

import videoRouter from './routes/video-routes'
import homeRouter from './routes/home-routes'
import playerRouter from './routes/player-routes'
import { resolve } from 'path'

const app = express()

app.use('/', homeRouter)
app.use('/videos', videoRouter)
app.use('/player', playerRouter)

export default app