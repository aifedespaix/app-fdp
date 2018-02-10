import {Component, OnInit} from '@angular/core';
import {Article} from './fdp-blog-article';
import {FdpArticleService} from './fdp-blog-article.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fdp-blog-article',
  templateUrl: './fdp-blog-article.component.html',
  styleUrls: ['./fdp-blog-article.component.scss']
})
export class FdpBlogArticleComponent implements OnInit {

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
