import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {createFileMutation} from './_queries/createFile';

import {Apollo} from 'apollo-angular';
import {File} from './file';
import {Video} from '../video/video';
import {createAudioFileViaYoutubeMutation} from './_queries/createAudioFileViaYoutube';
import {createImageFileViaYoutubeMutation} from './_queries/createImageFileViaYoutube';

@Injectable()
export class FileService {

  constructor(private apollo: Apollo) {
  }

  public sendFile(file: File) {
    return this.apollo
      .mutate({
        mutation: createFileMutation,
        variables: {
          name: file.name,
          type: file.type,
          value: file.value,
          lastModified: file.lastModified,
          size: file.size,
        },
      })
      .pipe(map(({data}: any) => {
        file.reader(data.createFile);
        return file;
      }));
  }


  public youtubedl(video: Video) {
    const variables: any = {
      youtube: {id: video.youtubeId},
      time: {start: video.time.start, end: video.time.end},
    };
    return this.apollo.mutate({mutation: createAudioFileViaYoutubeMutation, variables})
      .pipe(map(({data}: any) => {
        const file = new File();
        file.reader(data.createAudioFileViaYoutube);
        return file;
      }));
  }

  public youtubeImage(video: Video) {
    const variables: any = {youtube: {id: video.youtubeId}};
    return this.apollo.mutate({mutation: createImageFileViaYoutubeMutation, variables})
      .pipe(map(({data}: any) => {
        const file = new File();
        file.reader(data.createImageFileViaYoutube);
        return file;
      }));
  }
}
