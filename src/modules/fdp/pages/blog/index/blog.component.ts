import {Component} from '@angular/core';
import {FdpArticleService} from '../article/article.service';
import {Article} from '../article/article';
import {AuthService} from '../../user/auth/auth.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-fdp-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {

  public articles: Article[];
  public viewArticle: {};

  constructor(private authService: AuthService,
              private title: Title,
              private meta: Meta) {
    this.viewArticle = null;
    FdpArticleService.getArticles().then(
      articles => this.articles = articles,
    );
    this.title.setTitle('Blog - aifedespaix');
    this.meta.updateTag({
      name: 'description',
      content: `Car tout le monde a le droit d'écrire de la merde, car tout est faux sur cette planète. Viens déposer ta merde !`,
    });
    this.meta.updateTag({name: 'keywords', content: `blog, articles, fun, geek, jeux vidéos`});
  }

  public isLoged() {
    return this.authService.isLoged || true;
  }

}
