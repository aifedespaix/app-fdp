import { Injectable } from "@angular/core";

import "rxjs/add/operator/delay";
import { Apollo } from "apollo-angular";

import gql from "graphql-tag";

@Injectable()
export class FdpPortfolioService {
  private sendMailMutation = gql`
    query sendMail($mail: String!, $name: String!, $message: String!) {
      portfolio_sendMail(
        mailerInfos: { mail: $mail, name: $names, message: $message }
      )
    }
  `;

  constructor(private apollo: Apollo) {}

  public sendMail(mail, name, message) {
    console.log("mail");
    console.log(mail);
    console.log(name);
    console.log(message);
    return this.apollo
      .query({
        query: this.sendMailMutation,
        variables: { mail, name, message }
      })
      .subscribe(({ data, loading }) => {
        console.log(data);
        console.log(loading);
      });
    //   .map(({ data, errors }: any) => {
    //     if (errors) {
    //       return { success: false, error: errors[0].message };
    //     }
    //     if (data && data.portfolio_sendMail) {
    //       return { success: true, error: null };
    //     }
    //     return { success: false, error: "erreur chelou lol" };
    //   });
  }
}
