import { Request, Response } from "express";
import { resolve } from 'path'
import { readFileSync } from 'fs'
import VideoCreationService from "../services/VideoService";
export default class HomeController {
    exibirHome(req: Request, res: Response){
        const html = readFileSync(resolve(__dirname, '..', '..', 'public', 'index.html'))
        res.setHeader("Content-Type", "text/html")
        return res.send(html.toString())
    }
}