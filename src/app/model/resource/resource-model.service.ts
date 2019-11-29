import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {ResourceAudioInput, ResourceInput, ResourceType} from '../_generated/graphql.schema';
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

  public createResourceAudio(resource: ResourceAudioInput): Observable<ResourceType> {
    console.log(resource);
    return this.apollo.mutate({
      mutation: CREATE_RESOURCE_AUDIO,
      variables: {resource},
    })
      .pipe(map(
        (res: ApolloQueryResult<{ createResource: ResourceType }>) => {
          return res.data.createResource;
        },
      ));
  }

}
