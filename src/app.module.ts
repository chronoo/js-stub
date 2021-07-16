import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController, Middle } from './app.controller';
import { AppService } from './app.service';
import {SettingsController} from "./config/settings.controller";
import {SettingsService} from "./config/settings.service";

@Module({
  imports: [],
  controllers: [AppController, SettingsController],
  providers: [AppService, SettingsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(Middle).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
