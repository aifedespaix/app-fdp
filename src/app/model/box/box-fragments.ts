import gql from 'graphql-tag';
import {PICTURE_FULL} from '../picture/picture-fragments';
import {RESOURCE_FULL} from '../resource/resource-fragment';
import {USER_SHOW} from '../user/user-fragments';
import {COMMENT_FULL} from '../comment/comment-fragments';
import {TAG_FULL} from '../tag/tag-fragments';

export const BOX_SHOW = gql`
  fragment ShowBox on BoxType {
    id
    createdAt
    updatedAt
    title
    description
    views
    sound {...FullResource}
    thumbnail {...FullPicture}
    author {...PublicUser}
  }
  ${RESOURCE_FULL}
  ${PICTURE_FULL}
  ${USER_SHOW}
`;

export const BOX_FULL = gql`
  fragment FullBox on BoxType {
    ...ShowBox
    comments {...FullComment}
    likes { id value}
    tags {...FullTag}
  }
  ${BOX_SHOW}
  ${COMMENT_FULL}
  ${TAG_FULL}
`;
