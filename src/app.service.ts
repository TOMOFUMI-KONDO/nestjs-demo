import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  private engineUrl: string;

  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    const host = this.configService.get('ENGINE_HOST');
    const port = this.configService.get('ENGINE_PORT');
    this.engineUrl = `http://${host}:${port}`;
  }

  getHello(): string {
    return 'Hello World!';
  }

  async engine() {
    const res = await this.httpService.get(this.engineUrl).toPromise();
    return res.data;
  }

  async engineEcho(msg: string) {
    const res = await this.httpService
      .get(`${this.engineUrl}/echo`, { params: { msg } })
      .toPromise();
    return res.data;
  }
}
