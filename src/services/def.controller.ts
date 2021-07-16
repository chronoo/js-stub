import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';

@Controller("def")
export class DefController {
    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    getInfo() {
        return {
            aa: 1,
            bb: 2,
            cc: [1, 2, 3]
        }
    }
}

