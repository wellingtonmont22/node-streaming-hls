import app from './app'
import VideoService from './services/VideoService'

const PORT = process.env.PORT || 3000

const videoService = new VideoService()
        videoService.convertMp4ToM3u8('videos/mp4/test.mp4')
app.listen(PORT, () => console.log(`Running in port ${PORT}`))