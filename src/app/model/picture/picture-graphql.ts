import gql from 'graphql-tag';
import {PICTURE_FULL} from './picture-fragments';

export const PICTURE = {
  mutations: {
    createPicture: gql`
      mutation createPicture($file: Upload!, $picture: PictureInput!) {
        createPicture(file: $file picture: $picture) {...FullPicture}
      }
      ${PICTURE_FULL}
    `,
  },
  queries: {
    myPictures: gql`
      query myPictures {
        myPictures {...FullPicture}
      }
      ${PICTURE_FULL}
    `,
  },
};
