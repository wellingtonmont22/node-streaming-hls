import { Router } from 'express'
import PlayerController from '../controllers/PlayerController'

const router = Router()

const playerController = new PlayerController()

router.get('/:filename', playerController.exibirPlayer)

export default router