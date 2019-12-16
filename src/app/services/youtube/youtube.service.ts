import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Youtube} from './youtube.enum';
import {ImageType, PictureType} from '../../model/_generated/graphql.schema';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {

  private readonly apiKey: string;

  constructor(
    private readonly httpCLient: HttpClient,
  ) {
    this.apiKey = environment.youtube_aifedespaix;
  }

  playlists() {
    return this.httpCLient.get(`${this.baseUri(Youtube.Playlist)}&channelId=UCgzeNVQuYRUIt9D8g8y9emw`);
  }

  videos(playlistId: string) {
    return this.httpCLient.get(`${this.baseUri(Youtube.PlaylistItems)}&playlistId=${playlistId}`);
  }

  youtubeSnippetToPicture(youtubeSnippet: any): PictureType {
    const picture = new PictureType();
    picture.id = 'youtube';
    picture.title = youtubeSnippet.title;
    picture.description = youtubeSnippet.description;
    picture.createdAt = youtubeSnippet.publishedAt;
    picture.updatedAt = youtubeSnippet.publishedAt;
    picture.author = youtubeSnippet.channelTitle;

    picture.images = Object.entries(youtubeSnippet.thumbnails).map((t: [string, any]) => {
      const image = new ImageType();
      image.height = t[1].height;
      image.width = t[1].width;
      image.url = t[1].url;
      image.mimetype = 'image/jpg';
      return image;
    });

    return picture;
  }

  private baseUri(type: Youtube) {
    return `https://www.googleapis.com/youtube/v3/${type}?key=${this.apiKey}&part=snippet`;
  }

}
