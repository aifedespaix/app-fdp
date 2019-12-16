import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {PlaylistModelService} from '../../../model/playlist/playlist-model.service';
import {Metas} from '../../../services/seo-head';
import {Router} from '@angular/router';
import {PlaylistYoutubeType} from '../../../model/_generated/graphql.schema';
import {PageService} from '../../../services/page/page.service';

@Component({
  selector: 'app-music-youtube',
  templateUrl: './music-youtube.component.html',
  styleUrls: ['./music-youtube.component.scss'],
})
export class MusicYoutubeComponent implements OnInit {

  public playlists: PlaylistYoutubeType[];
  public activePlaylist: PlaylistYoutubeType;

  constructor(
    private readonly playlistModelService: PlaylistModelService,
    private readonly pageService: PageService,
    private readonly router: Router,
    private readonly location: Location,
  ) {
    pageService.layout(false);
  }

  ngOnInit() {
    this.playlists = this.playlistModelService.youtubePlaylists();
    this.updateMetas();
    this.updateActualPlaylist();
  }

  public switchPlaylist(playlist: PlaylistYoutubeType) {
    this.activePlaylist = playlist;
    this.location.replaceState(`music/youtube/${playlist.title}`);
  }

  private updateActualPlaylist() {
    const playlistName = this.router.url.split('/').pop();
    const playlist = this.playlists.find(p => p.title === playlistName);
    this.switchPlaylist(playlist ? playlist : this.playlists[0]);
  }

  private updateMetas() {
    this.pageService.metas(
      new Metas(
        'Les playlists de aifedespaix sur la plateforme youtube',
        'Youtube',
        `Des Playlists Youtube avec des clips de "Qualitay"`,
        '@aifedespaix',
        this.router.url,
      ),
    );
  }
}
