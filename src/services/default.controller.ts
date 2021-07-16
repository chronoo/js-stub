import { Controller, Get } from '@nestjs/common'

@Controller('*')
export class DefaultController {
  @Get()
  getInfo() {
    return 'text'
  }
}
