import {ArticleType} from '../../graphql';
import * as faker from 'faker';

export function getArticlesMock(): ArticleType[] {
  const articles = [];
  for (let i = 0; i < faker.random.number(10) + 5; i++) {
    articles.push(getArticleMock());
  }
  return articles;
}

export function getArticleMock(): ArticleType {
  const article = new ArticleType();
  article.id = faker.random.uuid();
  article.title = faker.random.words(5);
  article.content = faker.random.words(50);
  article.thumbnail = faker.random.image(); // todo faire carrement ressource (cool pour seo)
  return article;
}
