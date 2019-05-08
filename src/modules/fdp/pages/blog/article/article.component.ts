import {Component, OnInit} from '@angular/core';
import {Article} from './article';
import {FdpArticleService} from './article.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fdp-blog-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public id: number;
  public sub: any;
  public article: Article;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number

      FdpArticleService.getArticles().then(
        articles => this.article = articles[this.id]
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
