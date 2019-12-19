import gql from 'graphql-tag';
import {BOX_FULL} from './box-fragments';

export const BOX = {
  queries: {
    box: gql`
      query box($id: ID!) {
        box(id: $id) {...FullBox}
      }
      ${BOX_FULL}
    `,
    boxes: gql`
      query boxes($pagination: PaginationInput) {
        boxes(pagination: $pagination) {...FullBox}
      }
      # TODO BOX_SHOW
      ${BOX_FULL}
    `,
  },
  mutations: {
    updateBox: gql`
      mutation updateBox($box: BoxUpdateInput!) {
        updateBox(box: $box) {...FullBox}
      }
      ${BOX_FULL}
    `,
    createBox: gql`
      mutation createBox($box: BoxInput!, $sound: AudioInput!) {
        createBox(box: $box, sound: $sound) {...FullBox}
      }
      ${BOX_FULL}
    `,
    addViewBox: gql`
      mutation addViewBox($id: ID!) {
        addViewBox(id: $id) {
          id
          views
        }
      }
    `,
    deleteBox: gql`
      mutation deleteBox($id: ID!) {
        deleteBox(id: $id) {
          id
        }
      }
    `,
  },
};
