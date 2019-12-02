import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {AudioInput, ResourceInput, ResourceType} from '../_generated/graphql.schema';
import {CREATE_RESOURCE_AUDIO} from './graphql';
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
        mutation: CREATE_RESOURCE_AUDIO,
        variables: {audio},
      })
      .pipe(map(
        ({data: {createResource}}: ApolloQueryResult<{ createResource: ResourceType }>) => createResource,
      ));
  }

}
