import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  forUrl(text: string) {
    return text.replace(/ /g,"_");
  }d

}
