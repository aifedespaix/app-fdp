import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FdpPortfolioService } from "./fdp-portfolio.service";
@Component({
  selector: "app-fdp-portfolio",
  templateUrl: "./fdp-portfolio.component.html",
  styleUrls: ["./fdp-portfolio.component.scss"]
})
export class FdpPortfolioComponent {
  public contact: FdpContact;
  public contactFormGroup: FormGroup;

  constructor(private portfolioService: FdpPortfolioService) {
    this.contact = new FdpContact();
    this.contactFormGroup = new FormGroup({
      contact_mail: new FormControl(this.contact.mail, [
        Validators.required,
        Validators.email
      ]),
      contact_names: new FormControl(this.contact.names, [Validators.required]),
      contact_message: new FormControl(this.contact.message, [
        Validators.required
      ])
    });
  }

  public sendMail() {
    this.portfolioService
      .sendMail(this.contact.mail, this.contact.names, this.contact.message)
      .subscribe(
        ({ success, error }) => {
          if (success) {
            // this.userLogin.reset();
            // this.onLoginDone.emit(true);
          // } else {
            // this.error = error;
          // }
          console.log('cool');
        },
        err => {
          console.log("err");
          console.log(err);
        }
      );
    return false;
  }
}

class FdpContact {
  private _mail: string;
  private _names: string;
  private _message: string;

  constructor() {
    this.mail = "";
    this.names = "";
    this.message = "";
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
