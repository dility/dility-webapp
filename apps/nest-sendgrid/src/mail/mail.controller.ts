import { Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from 'src/sendgrid/sendgrid.service'; // add this

@Controller('mail')
export class MailController {
  constructor(
    private readonly sendgridService: SendgridService // into this
  ){}

   // Here we use query parameter to get the email that we want to send
   @Post('send-email')
   async sendEmail(@Query('email') email) {
    const senderIdentity = `avi.mehenwal@dility.io`;

     const mail = {
       to: email,
       subject: 'Hello from sendgrid',
       from: senderIdentity,
       text: 'Hello',
       html: '<h1>Hello</h1>',
     };
 
     return await this.sendgridService.send(mail);
   }
}
