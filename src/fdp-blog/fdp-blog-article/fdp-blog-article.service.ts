import { Injectable } from '@angular/core';

import { Article } from './fdp-blog-article';
import { ARTICLES } from '../datas/mock-articles';

@Injectable()
export class FdpArticleService {

  static getArticles(): Promise<Article[]> {
    return Promise.resolve(ARTICLES);
  }

}
