import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  health(): string {
    return this.appService.health();
  }

  @Get('/engine')
  async engine() {
    const res = await this.appService.engine();
    return { result: res };
  }

  @Get('/engine/echo')
  async engineEcho(@Param() params) {
    const res = await this.appService.engineEcho(params.msg);
    return { result: res };
  }
}
