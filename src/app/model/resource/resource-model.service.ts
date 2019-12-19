import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {AudioInput, ResourceType} from '../_generated/graphql.schema';
import {RESOURCE} from './resource-graphql';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {Observable} from 'rxjs';

@Injectable()
export class ResourceModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public createResourceAudio(audio: AudioInput): Observable<ResourceType> {
    return this.apollo
      .mutate({
        mutation: RESOURCE.mutations.createResourceAudio,
        variables: {audio},
      })
      .pipe(map(
        ({data: {createResource}}: ApolloQueryResult<{ createResource: ResourceType }>) => createResource,
      ));
  }

}
