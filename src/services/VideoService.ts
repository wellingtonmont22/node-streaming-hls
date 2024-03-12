import ffmpeg from 'fluent-ffmpeg'
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'
import { resolve } from 'path'
import { createId } from '@paralleldrive/cuid2'

ffmpeg.setFfmpegPath(ffmpegInstaller.path)

export default class VideoService {
    convertMp4ToM3u8(path: string, optionsFfmpeg?: string[]) {
        const videoFilename = `${createId()}.m3u8`
        const videosPath = resolve(__dirname, '..', '..', 'videos', 'm3u8')
        const options: string[] = [
            '-profile:v baseline',
            '-level 3.0',
            '-start_number 0',
            '-hls_time 10',
            '-hls_list_size 0',
            '-f hls'
        ]
        ffmpeg(path, { timeout: 10000 })
            .addOptions(optionsFfmpeg || options)
            .output(`${videosPath}/${videoFilename}`)
            .on('error', console.log)
            .run()
    }
}