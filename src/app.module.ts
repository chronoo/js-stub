import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {SettingsController} from "./config/settings.controller"
import {SettingsService} from "./config/settings.service"
import {RequestDelay} from "./config/request.delay"
import {DefController} from "./services/def.controller"

@Module({
    imports: [],
    controllers: [AppController, SettingsController, DefController],
    providers: [AppService, SettingsService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(RequestDelay).forRoutes({path: '*', method: RequestMethod.ALL})
    }
}
