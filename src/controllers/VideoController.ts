import { Request, Response } from "express";
import { createReadStream, existsSync } from "fs";
import { resolve } from "path";
import { pipeline } from "stream/promises";

export default class VideoController {
    uploadVideo(req: Request, res: Response){
        return res.json({ message: 'Success' })
    }

    async assistirVideo (req: Request, res: Response){
        const {
            params: {
                filename
            }
        } = req 
        const pathVideos = resolve(__dirname, '..', '..', 'videos', 'm3u8')
        const pathFile = `${pathVideos}/${filename}`
        if (!existsSync(pathFile)) return res.status(400).json({ message: 'Arquivo não existe.' })
        const videoStream = createReadStream(pathFile)
        res.setHeader("Content-Type",'application/octet-stream')
        await pipeline(
            videoStream,
            res,
        )
    }
}