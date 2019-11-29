import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {PlaylistModelService} from '../../../model/playlist/playlist-model.service';
import {LayoutService} from '../../../services/layout.service';
import {Metas} from '../../../services/seo-head';
import {SeoHeadService} from '../../../services/seo-head.service';
import {Router} from '@angular/router';
import {PlaylistYoutubeType} from '../../../model/_generated/graphql.schema';

@Component({
  selector: 'app-music-youtube',
  templateUrl: './music-youtube.component.html',
  styleUrls: ['./music-youtube.component.scss'],
})
export class MusicYoutubeComponent implements OnInit, OnDestroy {

  public playlists: PlaylistYoutubeType[];
  public activePlaylist: PlaylistYoutubeType;

  constructor(
    private readonly playlistModelService: PlaylistModelService,
    private readonly layoutService: LayoutService,
    private readonly seoHeadService: SeoHeadService,
    private readonly router: Router,
    private readonly location: Location,
  ) {
    layoutService.footerVisibility(false);
  }

  ngOnInit() {
    this.playlists = this.playlistModelService.youtubePlaylists();
    this.updateMetas();
    this.updateActualPlaylist();
  }

  private updateActualPlaylist() {
    const playlistName = this.router.url.split('/').pop();
    const playlist = this.playlists.find(p => p.title === playlistName);
    this.switchPlaylist(playlist ? playlist : this.playlists[0]);
  }

  ngOnDestroy(): void {
    this.layoutService.footerVisibility(true);
  }

  private updateMetas() {
    this.seoHeadService.setHead(
      new Metas(
        'Les playlists de aifedespaix sur la plateforme youtube',
        'Youtube',
        `Des Playlists Youtube avec des clips de "Qualitay"`,
        '@aifedespaix',
        this.router.url,
      ),
    );
  }

  public switchPlaylist(playlist: PlaylistYoutubeType) {
    this.activePlaylist = playlist;
    this.location.replaceState(`music/youtube/${playlist.title}`);
  }
}
