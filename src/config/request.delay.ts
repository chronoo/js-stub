import {Injectable, NestMiddleware} from "@nestjs/common"
import {SettingsService} from "./settings.service"
import {NextFunction} from "express"

@Injectable()
export class RequestDelay implements NestMiddleware {
    constructor(private service: SettingsService) {
    }

    async use(req: Request, res: Response, next: NextFunction) {
        const delay = this.service.getDelay(req.url) || 0
        await new Promise(_ => setTimeout(_, delay))
            .then(() => {
                console.log(`${req.url} - ${delay} ms`)
                next()
            })
    }
}

