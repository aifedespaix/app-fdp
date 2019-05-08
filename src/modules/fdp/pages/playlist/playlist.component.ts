import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Video} from '../../commun/video/video';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-fdp-music',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent {
  public readonly plateforms = {
    spotify: {name: 'spotify'},
    deezer: {name: 'deezer'},
    apple: {name: 'apple'},
  };
  public plateform;

  public playlists;
  public playlist;

  public youtubePlaylists: Video[];

  constructor(public videoDialog: MatDialog,
              private title: Title,
              private meta: Meta) {
    this.title.setTitle('Playlists - aifedespaix');
    this.meta.updateTag({
      name: 'description',
      content: `Du son lourd brooowwww'. c pour lé jen ki ème bi1 la musik (ptdr), allé vi1 ékouté la merd kon nékoute nou !!`,
    });
    this.meta.updateTag({name: 'keywords', content: `playslist, rap, rock, clip, listes, stylé`});

    this.plateform = null;
    this.playlists = [{
      title: 'A',
      deezer: 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=playlist&id=4491434164&app_id=1',
      spotify: 'https://open.spotify.com/embed/user/11121676292/playlist/4Y5wo2B7eEgq4rZBMeQezN',
      apple: 'https://embed.music.apple.com/fr/playlist/a/pl.u-NpXmzkWTLykpv7?app=music',
    },
      {
        title: 'B',
        deezer: 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=playlist&id=4500735326&app_id=1',
        spotify: 'https://open.spotify.com/embed/user/11121676292/playlist/7MweKYxjOAPDSgJjx7HKLt',
        apple: 'https://embed.music.apple.com/fr/playlist/b/pl.u-GgA5kaBhx2j8bp?app=music',
      },
    ];
    this.setPlateform(this.plateforms.deezer);
    this.setPlaylist(this.playlists[0]);

    this.youtubePlaylists = [
      new Video().reader({
        youtubeId: 'PL6EUPPQAaktWSqtssejVQbJeaVVIecm1Q',
        type: Video.types.playlist,
        title: 'EEEE (2018 - 2019)',
      }),
      new Video().reader({
        youtubeId: 'PL6EUPPQAaktVKuIob29iz5o9zNtVb6vYe',
        type: Video.types.playlist,
        title: 'DDDD (2017 - 2018)',
      }),
      new Video().reader({
        youtubeId: 'PL6EUPPQAaktVJDGcl2aRS9KeTa_H1f-_c',
        type: Video.types.playlist,
        title: 'CCCC (2016 - 2017)',
      }),
      new Video().reader({
        youtubeId: 'PL6EUPPQAaktUT2nlY2qfb1K_Ttz5MYKuN',
        type: Video.types.playlist,
        title: 'BBBB (2015 - 2016)',
      }),
      new Video().reader({
        youtubeId: 'PL6EUPPQAaktUp_pFVtDF2M_WVV9Hf143P',
        type: Video.types.playlist,
        title: 'AAAA (2014 - 2015)',
      }),
    ];
  }

  public setPlateform(plateform) {
    this.plateform = plateform;
  }

  public setPlaylist(playlist) {
    this.playlist = playlist;
  }

  // openVideoDialog(video) {
  //   const dialogRef = this.videoDialog.open(YoutubePlayerDialogComponent, {data: video});
  //   dialogRef.afterClosed().subscribe();
  // }

}
