import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';

import {Box} from './box';
import {map} from 'rxjs/operators';
import {createBoxMutation} from './_queries/createBox';
import {editBoxMutation} from './_queries/editBox';
import {myBoxesQuery} from './_queries/myBoxes';
import {boxesQuery} from './_queries/boxes';
import {deleteBoxMutation} from './_queries/deleteBox';
import {voteBoxMutation} from './_queries/voteBox';
import {filterBoxesQuery} from './_queries/filterBoxes';
import {boxQuery} from './_queries/box';

@Injectable()
export class BoxService {

  public listActive: boolean;

  constructor(private apollo: Apollo) {
  }

  public createBox(box: Box) {
    return this.apollo
      .mutate({
        mutation: createBoxMutation,
        variables: {
          title: box.title,
          sound: box.sound.id,
          miniature: box.miniature.id,
          description: box.description,
        },
      })
      .pipe(map(({data}: any) => {
        return Box.reader(data.createBox);
      }));
  }

  public queryFilter(filter: string) {
    return this.apollo.query<{ boxes }>({query: filterBoxesQuery, variables: {filter}});
  }

  public loadBoxes(filter: string, pagination: { page: number, perPage: number }) {
    if (pagination === null) {
      pagination = {page: 0, perPage: 200};
    }
    return this.apollo
      .query<{ boxes }>({query: boxesQuery, variables: {filter, pagination}})
      .pipe(map(
        ({data}: any) => {
          const boxes = [];
          data.boxes.forEach(box => {
            boxes.push(Box.reader(box));
          });
          return boxes;
        },
      ));
  }

  public myBoxes() {
    const myBoxesRef = this.apollo
      .watchQuery<{ boxes }>({query: myBoxesQuery, variables: {}}).valueChanges.pipe(
        map(({data}: any) => {
      console.log("pipe");
        const myBoxes = [];
        data.myBoxes.forEach(box => {
          myBoxes.push(Box.reader(box));
        });
        return myBoxes;
      }));

    return myBoxesRef;
  }

  public delete(id: any) {
    return this.apollo.mutate({mutation: deleteBoxMutation, variables: {id}});
  }

  public editBox(box: Box) {
    const variables: any = {id: box.id, title: box.title, description: box.description};
    if (box.miniature.id) {
      variables.miniature = box.miniature.id;
    }
    return this.apollo.mutate({mutation: editBoxMutation, variables});
  }

  public vote(id: any, vote: boolean) {
    console.log('mdr');
    const variables: any = {id, vote};
    console.log(variables);
    return this.apollo.mutate({mutation: voteBoxMutation, variables});
  }

  public getBox(id: any) {
    return this.apollo
      .query<{ box }>({query: boxQuery, variables: {id}})
      .pipe(map(({data}: any) => {
        return Box.reader(data.box);
      }));
  }
}
