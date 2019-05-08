import {Injectable} from '@angular/core';

import {Apollo} from 'apollo-angular';

import {sendMailQuery} from './_queries/sendMail';

@Injectable()
export class MailService {

  constructor(private apollo: Apollo) {
  }

  public sendMail(mail, name, message) {
    return this.apollo.query({query: sendMailQuery, variables: {mail, name, message}});
  }
}
