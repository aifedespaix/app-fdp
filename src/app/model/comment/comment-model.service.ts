import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {CommentEditInput, CommentInput, CommentType} from '../_generated/graphql.schema';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {COMMENT} from './comment-graphql';

@Injectable()
export class CommentModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public createBoxComment(comment: CommentInput): Observable<CommentType> {
    return this.apollo
      .mutate({
        mutation: COMMENT.mutations.createBoxComment,
        variables: {comment},
      })
      .pipe(map(({data: {createBoxComment}}: ApolloQueryResult<{ createBoxComment: CommentType }>) => createBoxComment));
  }

  public createArticleComment(comment: CommentInput): Observable<CommentType> {
    return this.apollo
      .mutate({
        mutation: COMMENT.mutations.createArticleComment,
        variables: {comment},
      })
      .pipe(map(({data: {createArticleComment}}: ApolloQueryResult<{ createArticleComment: CommentType }>) => createArticleComment));
  }

  public deleteComment(id: string): Observable<CommentType> {
    return this.apollo.mutate({
      mutation: COMMENT.mutations.deleteComment,
      variables: {id},
    }).pipe(map(({data: {deleteComment}}: ApolloQueryResult<{ deleteComment: CommentType }>) => deleteComment));
  }

  public updateComment(comment: CommentEditInput) {
    return this.apollo.mutate({
      mutation: COMMENT.mutations.updateComment,
      variables: {comment},
    }).pipe(map(({data: {updateComment}}: ApolloQueryResult<{ updateComment: CommentType }>) => updateComment));
  }
}
