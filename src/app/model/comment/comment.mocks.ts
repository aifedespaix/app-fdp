import {CommentType} from '../_generated/graphql.schema';
import * as faker from 'faker';
import {getUserMock} from '../user/user.mocks';

export function getCommentMock(): CommentType {
  const comment = new CommentType();
  comment.id = 'mock';
  comment.value = faker.lorem.paragraph(1);
  comment.author = getUserMock();
  comment.likes = [];
  comment.childs = [];
  comment.isParent = true;
  comment.createdAt = new Date();
  comment.updatedAt = new Date();
  return comment;
}

export function getCommentsMocks(min = 10): CommentType[] {
  const comments = [];
  for (let i = 0; i < faker.random.number(10) + min; i++) {
    comments.push(getCommentMock());
  }
  return comments;
}
