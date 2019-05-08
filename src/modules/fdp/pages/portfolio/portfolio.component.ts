import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MailService} from '../../commun/mail/mail.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-fdp-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  public contact: FdpContact;
  public contactFormGroup: FormGroup;
  public isContactSend: Boolean;
  public error: String;

  constructor(private mailService: MailService,
              private title: Title,
              private meta: Meta) {
    this.title.setTitle('Portfolio - aifedespaix');
    this.meta.updateTag({name: 'description', content: `Bonjour, ceci est un portfolio plutôt classique :/`});
    this.meta.updateTag({name: 'keywords', content: `portfolio, site web, mobile, développement`});

    this.isContactSend = false;
    this.error = null;
    this.contact = new FdpContact();
    this.contactFormGroup = new FormGroup({
      contact_mail: new FormControl(this.contact.mail, [
        Validators.required,
        Validators.email,
      ]),
      contact_names: new FormControl(this.contact.names, [Validators.required]),
      contact_message: new FormControl(this.contact.message, [
        Validators.required,
      ]),
    });
  }

  public sendMail() {
    this.mailService
      .sendMail(this.contact.mail, this.contact.names, this.contact.message)
      .subscribe(
        () => {
          this.isContactSend = true;
          this.error = null;
        },
        error => {
          this.error = error.graphQLErrors.map(x => x.message);
        },
      );
    return false;
  }
}

class FdpContact {
  private _mail: string;
  private _names: string;
  private _message: string;

  constructor() {
    this.mail = '';
    this.names = '';
    this.message = '';
  }

  get mail(): string {
    return this._mail;
  }

  get names(): string {
    return this._names;
  }

  get message(): string {
    return this._message;
  }

  set mail(value: string) {
    this._mail = value;
  }

  set names(value: string) {
    this._names = value;
  }

  set message(value: string) {
    this._message = value;
  }
}
