import {Injectable} from '@angular/core';
import 'rxjs/add/operator/delay';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';
import {FdpBox} from './fdp-box';

@Injectable()
export class FdpBoxService {

  private createBoxMutation = gql`
    mutation createBoxMutation($title: String! $sound: ID! $miniature: ID! $description: String!) {
      createBox(box: {title: $title sound: $sound miniature: $miniature description: $description}) {
        id
      }
    }
  `;

  private boxesQuery = gql`
    query boxesQuery {
      boxes {
        id
        title
        description
        sound {
          url
          type
        }
        miniature {
          url
        }
        tags {
          value
        }
      }
    }
  `;

  private myBoxesQuery = gql`
    query myBoxesQuery {
      myBoxes {
        id
        title
        description
        sound {
          url
          type
        }
        miniature {
          url
        }
        tags {
          value
        }
      }
    }
  `;

  private deleteBoxMutation = gql`
    mutation deleteBoxMutation($id: ID!) {
      deleteBox(id: $id)
    }
  `;

  constructor(private apollo: Apollo) {}

  public createBox(box: FdpBox) {
    return this.apollo.mutate({
      mutation: this.createBoxMutation,
      variables: {
        title: box.title,
        sound: box.sound.id,
        miniature: box.miniature.id,
        description: box.description,
      },
      errorPolicy: 'all',
    }).map(
      ({data, errors}: any) => {
        if (errors) {
          return {success: false, error: errors[0].message}
        }
        if (data && data.register) {
          return {success: true, error: null};
        }
        return {success: false, error: 'erreur chelou lol'};
      },
    );
  }

  public boxes() {
    return this.apollo.query({
      query: this.boxesQuery,
      variables: {},
      errorPolicy: 'all',
    }).map(
      ({data, errors}: any) => {
        if (errors) {
          return {success: false, error: errors[0].message}
        }
        if (data && data.boxes) {
          return data.boxes;
        }
        return {success: false, error: 'erreur chelou lol'};
      },
    );
  }

  public myBoxes() {
    return this.apollo.query({
      query: this.myBoxesQuery,
      variables: {},
      errorPolicy: 'all',
    }).map(
      ({data, errors}: any) => {
        if (errors) {
          return {success: false, error: errors[0].message, boxes: null}
        }
        if (data && data.myBoxes) {
          const boxes = [];
          data.myBoxes.forEach((box) => {
            boxes.push(FdpBox.reader(box));
          });
          return {success: true, error: null, boxes}
        }
        return {success: false, error: 'erreur chelou lol', boxes: null};
      },
    );
  }

  public delete(id: any) {
    return this.apollo.mutate({
      mutation: this.deleteBoxMutation,
      variables: {id},
      errorPolicy: 'all',
    }).map(
      ({data, errors}: any) => {
        if (errors) {
          return {success: false, error: errors[0].message}
        }
        if (data && data.deleteBox) {
          return {success: true, error: null}
        }
        return {success: false, error: 'erreur chelou lol'};
      },
    );
  }
}
