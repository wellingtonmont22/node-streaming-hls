import express from 'express'

import videoRouter from './routes/video-routes'
import homeRouter from './routes/home-routes'

const app = express()

app.use('/', homeRouter)
app.use('/videos', videoRouter)

export default app