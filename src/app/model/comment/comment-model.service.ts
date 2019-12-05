import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {CommentEditInput, CommentInput, CommentType} from '../_generated/graphql.schema';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {CREATE_ARTICLE_COMMENT, CREATE_BOX_COMMENT, DELETE_COMMENT, UPDATE_COMMENT} from './graphql';

@Injectable()
export class CommentModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public createBoxComment(comment: CommentInput): Observable<CommentType> {
    return this.apollo
      .mutate({
        mutation: CREATE_BOX_COMMENT,
        variables: {comment},
      })
      .pipe(map(({data: {createBoxComment}}: ApolloQueryResult<{ createBoxComment: CommentType }>) => createBoxComment));
  }

  public createArticleComment(comment: CommentInput): Observable<CommentType> {
    return this.apollo
      .mutate({
        mutation: CREATE_ARTICLE_COMMENT,
        variables: {comment},
      })
      .pipe(map(({data: {createArticleComment}}: ApolloQueryResult<{ createArticleComment: CommentType }>) => createArticleComment));
  }

  public deleteComment(id: string): Observable<CommentType> {
    return this.apollo.mutate({
      mutation: DELETE_COMMENT,
      variables: {id},
    }).pipe(map(({data: {deleteComment}}: ApolloQueryResult<{ deleteComment: CommentType }>) => deleteComment));
  }

  public updateComment(comment: CommentEditInput) {
    return this.apollo.mutate({
      mutation: UPDATE_COMMENT,
      variables: {comment},
    }).pipe(map(({data: {updateComment}}: ApolloQueryResult<{ updateComment: CommentType }>) => updateComment));
  }
}
