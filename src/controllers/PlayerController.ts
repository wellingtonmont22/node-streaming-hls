import { Request, Response } from "express";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";


export default class PlayerController {
    exibirPlayer (req: Request, res: Response) {
        const {
            params: {
                filename
            }
        } = req 
        const pathVideos = resolve(__dirname, '..', '..', 'videos', 'm3u8')
        const pathFile = `${pathVideos}/${filename}`
        const linkStream = `http://localhost:5000/videos/assistir/${filename}`
        if (!existsSync(pathFile)) return res.status(400).json({ message: 'Arquivo não existe.' })

        let html = readFileSync(resolve(__dirname, '..', '..', 'public', 'player.html'), { encoding: 'utf-8' })
        html = html.replace('__linkDoVideo__', linkStream)
        res.setHeader("Content-Type", "text/html")
        return res.send(html)
    }
}