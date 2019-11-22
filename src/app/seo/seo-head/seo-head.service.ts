import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Metas, OgImage, OgMetas, OgType, TwitterMetas} from './seo-head';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable()
export class SeoHeadService {

  constructor(
    protected readonly _title: Title,
    protected readonly meta: Meta,
    protected readonly router: Router,
  ) {
    this._actualTitle = '';
  }

  private _actualTitle: string;

  get actualTitle(): string {
    return this._actualTitle;
  }

  public setHead(metas: Metas) {
    this.meta.updateTag({property: 'fb:app_id', content: environment.fbApiId});
    this.setCanonicalUrl(metas.canonicalUrl);
    this._actualTitle = metas.shortTitle;
    this.setTitle(`${metas.title} - aifedespaix`);

    this.meta.updateTag({name: 'description', content: metas.description});
    this.meta.updateTag({name: 'author', content: metas.author});

    this.setOg(metas.ogMetas);
    this.setTwitter(metas.twitterMetas);
  }

  private setCanonicalUrl(url: string) {
    // todo
  }

  private setOgImage(ogImage: OgImage) {
    this.meta.updateTag({property: 'og:image:url', content: ogImage.url});
    this.meta.updateTag({property: 'og:image:secure_url', content: ogImage.secureUrl});
    this.meta.updateTag({property: 'og:image:type', content: ogImage.type});
    this.meta.updateTag({property: 'og:image:width', content: ogImage.width.toString()});
    this.meta.updateTag({property: 'og:image:height', content: ogImage.height.toString()});
    this.meta.updateTag({property: 'og:image:alt', content: ogImage.alt});
  }

  private setOg(ogMetas: OgMetas) {
    this.meta.updateTag({property: 'og:url', content: ogMetas.url});
    this.meta.updateTag({property: 'og:title', content: ogMetas.title});
    this.meta.updateTag({property: 'og:description', content: ogMetas.description});
    this.meta.updateTag({property: 'og:siteName', content: ogMetas.siteName});

    this.meta.updateTag({property: 'og:locale', content: ogMetas.locale});
    for (const localAlternate of ogMetas.localesAlternate) {
      this.meta.updateTag({property: 'og:locale:alternate', content: localAlternate});
    }

    this.setOgImage(ogMetas.image);
    this.setOgType(ogMetas.type);
  }

  private setTwitter(twitter: TwitterMetas) {
    this.meta.updateTag({name: 'twitter:card', content: twitter.twitterCard});
    this.meta.updateTag({name: 'twitter:description', content: twitter.twitterDescription});
    this.meta.updateTag({name: 'twitter:title', content: twitter.twitterTitle});
    this.meta.updateTag({name: 'twitter:image', content: twitter.twitterImage});
    this.meta.updateTag({name: 'twitter:creator', content: twitter.twitterCreator});
  }

  private setTitle(value: string) {
    this._title.setTitle(value);
    this.meta.updateTag({property: 'og:title', content: value});
  }

  private setOgType(ogType: OgType) {
    if (ogType.article) {
      this.meta.updateTag({property: 'og:type', content: 'article'});
      this.meta.updateTag({property: 'article:published_time', content: ogType.article.publishedTime.toISOString()});
      this.meta.updateTag({property: 'article:modified_time', content: ogType.article.modifiedTime.toISOString()});
      this.meta.updateTag({property: 'article:expiration_time', content: ogType.article.expirationTime.toISOString()});
      this.meta.updateTag({property: 'article:author', content: ogType.article.author});
      this.meta.updateTag({property: 'article:section', content: ogType.article.section});

      for (const tag of ogType.article.tags) {
        this.meta.addTag({property: 'article:tag', content: tag});
      }
    }
  }

}
