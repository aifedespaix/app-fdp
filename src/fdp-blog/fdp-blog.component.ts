import {Component, OnInit} from '@angular/core';
import {FdpArticleService} from './fdp-blog-article/fdp-blog-article.service';
import {Article} from './fdp-blog-article/fdp-blog-article';

@Component({
  selector: 'app-fdp-blog',
  templateUrl: './fdp-blog.component.html',
  styleUrls: ['./fdp-blog.component.scss']
})
export class FdpBlogComponent implements OnInit {

  public articles: Article[];
  public viewArticle: {};

  constructor() {
    this.viewArticle = null;
    FdpArticleService.getArticles().then(
      articles => this.articles = articles
    );
  }

  ngOnInit() {}

}
