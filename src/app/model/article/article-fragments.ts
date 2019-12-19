import gql from 'graphql-tag';
import {TAG_FULL} from '../tag/tag-fragments';
import {USER_SHOW} from '../user/user-fragments';
import {PICTURE_FULL} from '../picture/picture-fragments';
import {COMMENT_FULL} from '../comment/comment-fragments';
import {CATEGORY_FULL} from '../category/category-fragments';

export const ARTICLE_SHOW = gql`
  fragment ShowArticle on ArticleType {
    id
    createdAt
    updatedAt
    title
    description
    views
    thumbnail {...FullPicture}
    author {...PublicUser}
    likes {id value}
    tags {...FullTag}
  }
  ${PICTURE_FULL}
  ${TAG_FULL}
  ${USER_SHOW}
`;

export const ARTICLE_FULL = gql`
  fragment FullArticle on ArticleType {
    ...ShowArticle
    comments {...FullComment}
    category {...FullCategory}
  }
  ${COMMENT_FULL}
  ${CATEGORY_FULL}
  ${ARTICLE_SHOW}
`;
