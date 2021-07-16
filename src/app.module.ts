import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SettingsController } from './config/settings.controller'
import { SettingsService } from './config/settings.service'
import { RequestDelay, TransformInterceptor } from './config/request.delay'
import { AllController, DefController } from './services/def.controller'
import { APP_INTERCEPTOR } from '@nestjs/core'

@Module({
  imports: [],
  controllers: [AppController, SettingsController, DefController, AllController],
  providers: [AppService, SettingsService, {
    provide: APP_INTERCEPTOR,
    useClass: TransformInterceptor,
  }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(RequestDelay).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
