import {Component, OnInit} from '@angular/core';
import {ArticleType} from '../../../model/_generated/graphql.schema';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {PageService} from '../../../services/page/page.service';
import {Metas} from '../../../services/seo-head';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.scss'],
})
export class AdminIndexComponent implements OnInit {

  public articles: ArticleType[];

  constructor(
    private readonly router: Router,
    private readonly pageService: PageService,
    private readonly articleModelService: ArticleModelService,
  ) {
    this.pageService.layout(false);
  }

  ngOnInit() {
    this.articleModelService
      .articles({}, null)
      .subscribe((articles) => {
        this.articles = articles;
      });
    this.setMetas();
  }

  private setMetas() {
    this.pageService.metas(
      new Metas(
        'Administration',
        'Administration',
        `T'es l'admin, tu peux faire ce que tu veux ici mdr`,
        'clapette',
        this.router.url,
      ),
    );
  }

}
