import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {

  private readonly youtubeApiKey: string = environment.youtubeApiKey;
  private readonly youtubeApiUrl: string = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private readonly httpClient: HttpClient) {
  }

  public urlToId(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (!match || match[7].length !== 11) {
      throw new Error('Invalid url');
    }

    return match[7];
  }

  public getVideosForChanel(channel, maxResults): Observable<any> {
    // const a = YT.;
    // a.Au
    const url = this.youtubeApiUrl + this.youtubeApiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;
    return this.httpClient.get(url)
      .pipe(map((res) => {
        console.log('find');
        return res;
      }));
  }
}
