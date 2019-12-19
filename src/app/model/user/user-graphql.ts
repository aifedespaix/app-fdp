import gql from 'graphql-tag';
import {USER_SHOW} from './user-fragments';
import {ARTICLE_SHOW} from '../article/article-fragments';
import {BOX_SHOW} from '../box/box-fragments';

export const USER = {
  queries: {
    myProfile: gql`
      query myProfile {
        myProfile {...PublicUser}
      }
      ${USER_SHOW}
    `,
    myProfileFull: gql`
      query myProfile {
        myProfile {
          ...PublicUser
          articles {...ShowArticle}
          boxes {...ShowBox}}
        #      commentaries {...} // todo
      }
      ${USER_SHOW}
      ${ARTICLE_SHOW}
      ${BOX_SHOW}
    `,
  },
  mutations: {
    editMyUser: gql`
      mutation edi($avatarId: ID) {
        editMyUser(user: {avatarId: $avatarId}) {...PublicUser}
      }
      ${USER_SHOW}
    `,
  },
};
