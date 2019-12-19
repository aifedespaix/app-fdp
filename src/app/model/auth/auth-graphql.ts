import gql from 'graphql-tag';
import {USER_SHOW} from '../user/user-fragments';

export const AUTH = {
  mutations: {
    register: gql`
      mutation register($login: String!, $email: String!, $password: String!) {
        authRegister(data: {login: $login email: $email password: $password}) {
          token
          user {...PublicUser}
        }
      }
      ${USER_SHOW}
    `,
    login: gql`
      mutation login($login: String!, $password: String!) {
        authLogin(login: { login: $login password: $password}) {
          token
          user {...PublicUser}
        }
      }
      ${USER_SHOW}
    `,
  },
};
