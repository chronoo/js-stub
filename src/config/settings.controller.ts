import {Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UseInterceptors} from "@nestjs/common";
import {SettingsService} from "./settings.service";

@Controller('settings')
export class SettingsController {
    constructor(private service: SettingsService) {
    }

    @Post("/:service")
    setSettings(@Param('service') service: string, @Body() body: {delay: number}) {
        this.service.setDelay(service, body.delay)
    }

    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    getSettings() {
        return this.service.getDelays()
    }
}

