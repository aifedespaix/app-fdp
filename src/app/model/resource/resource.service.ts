import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {ResourceInput, ResourceType} from '../graphql.schema';
import {CREATE_RESOURCE} from './gql/mutations';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {Observable} from 'rxjs';

@Injectable()
export class ResourceService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public createResource(resource: ResourceInput, file: File): Observable<ResourceType> {
    return this.apollo.mutate({
      mutation: CREATE_RESOURCE,
      variables: {...resource, file},
    })
      .pipe(map(
        (res: ApolloQueryResult<{ createResource: ResourceType }>) => {
          return res.data.createResource;
        },
      ));
  }

}
