import {Component, OnDestroy, OnInit} from '@angular/core';
import {LayoutService} from '../../../services/layout.service';
import {ArticleType} from '../../../model/_generated/graphql.schema';
import {ArticleModelService} from '../../../model/article/article-model.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.scss'],
})
export class AdminIndexComponent implements OnInit, OnDestroy {

  public articles: ArticleType[];

  constructor(
    private readonly layoutService: LayoutService,
    private readonly articleModelService: ArticleModelService,
  ) {
    this.layoutService.footerVisibility(false);
  }

  ngOnInit() {
    this.articleModelService
      .articles({}, null)
      .subscribe((articles) => {
        this.articles = articles;
      });
  }

  ngOnDestroy(): void {
    this.layoutService.footerVisibility(true);
  }

}
