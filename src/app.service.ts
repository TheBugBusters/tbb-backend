import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { Whatsapp, create } from 'venom-bot';
@Injectable()
export class AppService {
  private sessionName: string = 'douglas';
  private s3: AWS.S3;
  private client: Whatsapp;

  constructor(private configService: ConfigService) {
    this.s3 = new AWS.S3({
      region: configService.get('REGIONS_AWS') || 'sa-east-1',
      accessKeyId:
        configService.get('AWS_ACCESS_KEY_ID') || 'AKIAQKDCNNSVAP26N3ES',
      secretAccessKey:
        configService.get('AWS_SECRET_ACCESS_KEY') ||
        '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',
      signatureVersion: 'v4',
    });
  }

  async generateQRCode(phoneNumber: string) {
    this.client = await create(
      `session-${phoneNumber}`,
      async (base64Qr) => {
        const matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
          response: any = {};

        if (matches.length !== 3) {
          return new Error('Invalid input string');
        }
        response.type = matches[1];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const base64Data = new Buffer.from(matches[2], 'base64');

        const type = base64Qr.split(';')[0].split('/')[1];

        const params = {
          Bucket: 'dify-midia/whatsapp/qrcode',
          Key: `qrcode-${phoneNumber}-${new Date().getTime()}.${type}`, // type is not required
          Body: base64Data,
          ContentEncoding: 'base64', // required
          ContentType: `image/${type}`, // required. Notice the back ticks
        };

        await this.s3.upload(params).promise();
      },
      undefined,
      { logQR: false },
    );
    return true;
  }

  async getHello(): Promise<string> {
    if (!this.client) {
      new NotFoundException('Cliente deslogado.');
    }
    const response = await this.client.sendText(
      `55${'16997399953'}@c.us`,
      'data.outra messagem',
    );
    if (response) {
      this.client.close();
    }

    return 'Hello World! 2';
  }
}
