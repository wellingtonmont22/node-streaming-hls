import { Router } from 'express'
import HomeController from '../controllers/HomeController'

const homeController = new HomeController
const router = Router()

router.get('/', homeController.exibirHome)


export default router