import {Component, Input, OnInit} from '@angular/core';
import {ArticleType, LikeEnum} from '../../../model/_generated/graphql.schema';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {SnackService} from '../../../services/snack/snack.service';

@Component({
  selector: 'app-article-admin',
  templateUrl: './article-admin.component.html',
  styleUrls: ['./article-admin.component.scss'],
})
export class ArticleAdminComponent implements OnInit {

  @Input() label = 'Articles';
  @Input() articles: ArticleType[];

  public displayedColumns: string[];
  public selection = new SelectionModel<ArticleType>(true, []);
  public dataSource: MatTableDataSource<ArticleType>;

  constructor(
    private readonly articleModelService: ArticleModelService,
    private readonly snackService: SnackService,
  ) {
    this.articles = [];
    this.displayedColumns = [
      'actions',
      'title',
      'description',
      'comments',
      'published',
    ];
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ArticleType>(this.articles);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: ArticleType): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row `;
  }

  public getLikes(article: ArticleType) {
    return article.likes.filter((like) => like.value === LikeEnum.LIKE);
  }

  public publishArticles() {
    this.selection.selected.map((article) => {
      this.articleModelService
        .updateArticle({id: article.id, published: true})
        .subscribe(
          () => {
            this.snackService.success(`Les articles sont publiés`);
            this.selection.selected.forEach((a) => a.published = true);
          },
          () => {
            this.snackService.error(`Vous n'avez pas l'autorisation de publier ces articles.`);
          },
        );
    });
  }

  public publishLabel() {
    switch (this.selection.selected.length) {
      case 0:
        return 'Publier';
      case 1:
        return `Publier l'article`;
      default:
        return `Publier les ${this.selection.selected.length} articles.`;
    }
  }
}
