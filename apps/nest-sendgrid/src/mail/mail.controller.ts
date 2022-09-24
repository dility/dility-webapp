import { Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from 'src/sendgrid/sendgrid.service';

@Controller('mail')
export class MailController {
  constructor(
    private readonly sendgridService: SendgridService
  ) { }

  @Post('send-email')
  async sendEmail(@Query('email') email) {
    const senderIdentity = `avi.mehenwal@dility.io`;

    const mail = {
      from: senderIdentity,
      template_id: "d-9a759651728042f79daaaa74cdeb2a0c",
      personalizations: [
        {
          to: [{ email }],
          // to: [
          //   { email: "avi.mehanwal@gmail.com" },
          //   { email: 'laura.olivarez@dility.io' },
          //   { email: 'ahmed@dility.io' },
          // ],
          dynamic_template_data: {
            workshop_owner: "Avi Mehenwal",
            workshop_name: "My-awesome-workshop",
            workshop_date: "32-August-2022",
          },
          content: [
            {
              type: "text/html",
              value: "text/html",
            },
          ],
        },
      ],
      // to: email,
      // subject: 'Hello from sendgrid',
      // text: 'Hello',
      // html: '<h1>Hello</h1>',
    };

    // @ts-ignore
    return await this.sendgridService.send(mail);
  }
}
