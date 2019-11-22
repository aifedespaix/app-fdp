import {ArticleType} from '../../_generated/graphql.schema';
import * as faker from 'faker';
import {getUserMock} from '../../user/tests/user.mocks';
import {getPictureMock} from '../../picture/tests/picture.mocks';

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
  article.thumbnail = getPictureMock();
  article.author = getUserMock();
  return article;
}
