import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: [ './quote.component.scss' ]
})
export class QuoteComponent {
  public contactForm: FormGroup;

  public messageSent: boolean;

  constructor() {
    this.contactForm = new FormGroup({
      fullName: new FormControl('', [ Validators.required, Validators.minLength(1) ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      phoneNumber: new FormControl('', [ Validators.required, ]),
      message: new FormControl('', [ Validators.required ])
    });
  }

  public async sendEmail() {
    try {
      await axios.post('https://send-mail.now.sh/api', {
        fullName: this.contactForm.value.fullName,
        email: this.contactForm.value.email,
        phoneNumber: this.contactForm.value.phoneNumber,
        message: this.contactForm.value.message,
        recipientEmail: 'smaldontreeservices@gmail.com'
      });

      this.messageSent = true;
    } catch (e) {
      this.messageSent = false;
    }
  }
}
