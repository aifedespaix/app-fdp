import {PlaylistStreamingType} from '../../../model/_generated/graphql.schema';

export const MUSIC_STREAMING: PlaylistStreamingType[] = [
  {
    plateform: 'Spotify',
    playlists: [
      {
        name: 'a',
        iframe: 'https://open.spotify.com/embed/user/11121676292/playlist/4Y5wo2B7eEgq4rZBMeQezN',
      },
      {
        name: 'b',
        iframe: 'https://open.spotify.com/embed/user/11121676292/playlist/7MweKYxjOAPDSgJjx7HKLt',
      },
    ],
  },
  {
    plateform: 'Deezer',
    playlists: [
      {
        name: 'a',
        // tslint:disable-next-line:max-line-length
        iframe: 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=playlist&id=4491434164&app_id=1',
      },
      {
        name: 'b',
        // tslint:disable-next-line:max-line-length
        iframe: 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=playlist&id=4500735326&app_id=1',
      },
    ],
  },
  {
    plateform: 'Apple Music',
    playlists: [
      {
        name: 'a',
        iframe: 'https://embed.music.apple.com/fr/playlist/a/pl.u-NpXmzkWTLykpv7?app=music',
      },
      {
        name: 'b',
        iframe: 'https://embed.music.apple.com/fr/playlist/b/pl.u-GgA5kaBhx2j8bp?app=music',
      },
    ],
  },
];
