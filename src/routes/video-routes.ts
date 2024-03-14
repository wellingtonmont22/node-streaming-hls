import { Router } from 'express'
import VideoController from '../controllers/VideoController'

const videoController = new VideoController()
const router = Router()

router.post('/', videoController.uploadVideo)
router.get('/assistir/:filename', videoController.assistirVideo)



export default router