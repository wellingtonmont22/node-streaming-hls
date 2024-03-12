import express from 'express'

import videoRouter from './routes/video-routes'

const app = express()

app.use('/videos', videoRouter)

export default app