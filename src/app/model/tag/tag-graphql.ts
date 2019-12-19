import gql from 'graphql-tag';
import {TAG_FULL} from './tag-fragments';

export const TAG = {
  queries: {
    tags: gql`
      query tags($pagination: PaginationInput) {
        tags(pagination: $pagination) {...FullTag}
      }
      ${TAG_FULL}
    `,
  },
};
