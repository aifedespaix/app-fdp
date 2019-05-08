import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {File} from '../../graphql.schema';

@Injectable({
  providedIn: 'root',
})
export class HeadService {

  constructor(
    private readonly headTitle: Title,
    private meta: Meta,
  ) {}

  removeFacebookTags() {
    this.meta.removeTag('property="fb:app_id"');
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:description"');
  }

  set author(value: string) {
    this.meta.updateTag({name: 'author', content: value});
  }

  set description(value: string) {
    this.meta.updateTag({name: 'description', content: value});
  }

  set keywords(value: string) {
    this.meta.updateTag({name: 'keywords', content: value});
  }

  set ogImage(value: string) {
    this.meta.updateTag({name: 'og:image', content: value});
  }

  // set ogLocale(value: string) { todo
  //   this.meta.updateTag({name: 'keywords', content: file.locale});
  // }

  set ogSite_name(value) {
    this.meta.updateTag({name: 'og:site_name', content: value});
  }

  set ogTitle(value: string) {
    this.meta.updateTag({name: 'og:title', content: value});
  }

  set ogDescription(value: string) {
    this.meta.updateTag({name: 'og:description', content: value});
  }

  // set ogType(file: File) { todo
  //   this.meta.updateTag({name: 'keywords', content: file.type});
  // }

  set ogUrl(value: string) {
    this.meta.updateTag({name: 'og:url', content: value});
  }

  set ogVideo(file: File) {
    this.meta.updateTag({name: 'og:video', content: file.url});
  }

  set ogType(value: string) {
    this.meta.updateTag({name: 'og:type', content: value});
  }

  set fbApp_id(value: string) {
    this.meta.updateTag({name: 'fb:app_id', content: value});
  }

  set title(value: string) {
    this.headTitle.setTitle(`${value} - aifedespaix`);
  }
}
