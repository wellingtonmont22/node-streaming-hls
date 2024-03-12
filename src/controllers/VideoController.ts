import { Request, Response } from "express";

export default class VideoController {
    uploadVideo(req: Request, res: Response){
        return res.json({ message: 'Success' })
    }
}