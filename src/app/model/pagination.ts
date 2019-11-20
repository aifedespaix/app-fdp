export class Pagination {
  skip?: number;
  after?: number;
  before?: number;
  first?: number;
  last?: number;
}

export const gqlPaginationVariables = '$skip: Int, $after: Int, $before: Int, $first: Int, $last: Int';
export const gqlPaginationContent = 'skip: $skip after: $after before: $before first: $first last: $last';
