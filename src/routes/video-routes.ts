import { Router } from 'express'
import VideoController from '../controllers/VideoController'

const videoController = new VideoController()
const router = Router()

router.post('/upload', videoController.uploadVideo)


export default router