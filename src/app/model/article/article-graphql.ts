import {ARTICLE_FULL, ARTICLE_SHOW} from './article-fragments';
import gql from 'graphql-tag';

// todo use article _ show
export const ARTICLE = {
  queries: {
    articles: gql`
      query articles($pagination: PaginationInput, $published: Boolean) {
        articles(pagination: $pagination published: $published) {...FullArticle}
      }
      ${ARTICLE_FULL}
    `,
    articlesFull: gql`
      query articles($pagination: PaginationInput, $published: Boolean) {
        articles(pagination: $pagination published: $published) {...FullArticle}
      }
      ${ARTICLE_FULL}
    `,
    article: gql`
      query article($id: ID!) {
        article(id: $id) {...FullArticle}
      }
      ${ARTICLE_FULL}
    `,
  },
  mutations: {
    createArticle: gql`
      mutation createArticle($article: ArticleInput!) {
        createArticle(article: $article) {...ShowArticle}
      }
      ${ARTICLE_SHOW}
    `,
    updateArticle: gql`
      mutation updateArticle($article: ArticleEditInput!) {
        updateArticle(article: $article) {...ShowArticle}
      }
      ${ARTICLE_SHOW}
    `,
  },
};
