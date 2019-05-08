import { Injectable } from '@angular/core';

import { Article } from './article';
import { ARTICLES } from '../blog.mocks';

@Injectable()
export class FdpArticleService {

  static getArticles(): Promise<Article[]> {
    return Promise.resolve(ARTICLES);
  }

}
