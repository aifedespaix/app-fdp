import { Injectable } from "@angular/core";

import "rxjs/add/operator/delay";
import { Apollo } from "apollo-angular";

import gql from "graphql-tag";
import { Observable } from "rxjs";

@Injectable()
export class FdpPortfolioService {
  private sendMailMutation = gql`
    query sendMail($mail: String!, $name: String!, $message: String!) {
      portfolioSendMail(
        mailerInfo: { mail: $mail, name: $name, message: $message }
      )
    }
  `;

  constructor(private apollo: Apollo) {}

  public sendMail(
    mail,
    name,
    message
  ): Observable<{ success: boolean; error: string }> {
    return this.apollo
      .query({
        query: this.sendMailMutation,
        variables: { mail, name, message },
        errorPolicy: "all"
      })
      .map(
        ({ data, errors }: any) => {
          if (errors) {
            return { success: false, error: errors[0].message };
          }
          if (data && data.portfolioSendMail) {
            return { success: true, error: null };
          }
          // return { success: false, error: "erreur chelou lol" };
        },
        err => {
          console.log("errddddd");
          console.log(err);
        }
      );
  }
}
