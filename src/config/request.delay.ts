import { CallHandler, ExecutionContext, Injectable, NestInterceptor, NestMiddleware } from '@nestjs/common';
import {SettingsService} from "./settings.service"
import {NextFunction} from "express"
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

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

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map(data => ({ data })));
  }
}
