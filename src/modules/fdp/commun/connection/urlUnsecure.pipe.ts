import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'urlUnsecure',
})
export class UrlUnsecurePipe implements PipeTransform {

  constructor(public sanitizer: DomSanitizer) {}

  transform(url): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
