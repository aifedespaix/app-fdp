// https://ogp.me/
import {environment} from '../../environments/environment';
import {PictureType} from '../model/_generated/graphql.schema';
import {getUndefinedPictureMock} from '../model/picture/picture.mocks';


export class Metas {
  public readonly title: string;
  public readonly shortTitle: string;
  public readonly description: string;
  public readonly author: string;
  public readonly canonicalUrl: string;
  public readonly ogMetas: OgMetas;
  public readonly twitterMetas: TwitterMetas;

  constructor(
    title: string,
    shortTitle: string,
    description: string,
    author: string,
    url: string,
    image?: OgImage,
    type?: OgType,
    siteName?: string,
    locale?: string,
    localesAlternate?: string[],
    twitter?: string,
  ) {
    this.shortTitle = shortTitle;
    this.title = title;
    this.description = description;
    this.author = author;
    url = `${environment.host}/${url}`;
    this.canonicalUrl = url;

    if (!image) {
      image = mainImage;
    }
    if (!type) {
      type = {};
    }
    if (!siteName) {
      siteName = 'aifedespaix';
    }
    if (!locale) {
      locale = 'fr_FR';
    }
    if (!localesAlternate) {
      localesAlternate = ['fr_FR'];
    }
    if (!twitter) {
      twitter = '@aifedespaix';
    }
    if (!type) {
      type = {website: true};
    }

    this.ogMetas = new OgMetas(
      title,
      description,
      url,
      type,
      image,
      siteName,
      locale,
      localesAlternate,
    );

    this.twitterMetas = new TwitterMetas(
      title,
      description,
      twitter,
      image.url,
      TwitterCard.SUMMARY_LARGE_IMAGE,
    );
  }
}

export class OgMetas {
  locale: string;
  localesAlternate: string[];
  title: string;
  description: string;
  url: string;
  siteName: string;
  type: OgType;
  image: OgImage;

  constructor(
    title: string,
    description: string,
    url: string,
    type: OgType,
    image: OgImage,
    siteName: string,
    locale: string,
    localesAlternate: string[],
  ) {
    this.locale = locale;
    this.localesAlternate = localesAlternate;
    this.title = title;
    this.description = description;
    this.url = url;
    this.siteName = siteName;
    this.type = type;
    this.image = image;
  }
}

export class OgType {
  article?: OgArticleType;
  website?: boolean;
  // musicSong: any;
  // musicAlbum: any;
  // musicPlaylist: any;
  // musicRadioStation: any;
  // videoMovie: any;
  // videoEpisode: any;
  // videoTvShow: any;
}

export class OgImage {
  url: string;
  secureUrl: string;
  type: string;
  width: number;
  height: number;
  alt: string;

  public static fromPicture(picture: PictureType) {
    return {
      url: picture.images[0].url,
      secureUrl: picture.images[0].url,
      type: picture.images[0].mimetype,
      width: picture.images[0].width,
      height: picture.images[0].height,
      alt: picture.description,
    };
  }
}

export class OgArticleType {
  publishedTime: Date;
  modifiedTime: Date;
  expirationTime: Date;
  author: string;
  section: string; // todo preparer champ pour ce cas
  tags: string[];  // todo preparer champ pour ce cas
}

export class TwitterMetas {
  twitterCard: TwitterCard;
  twitterDescription: string;
  twitterTitle: string;
  twitterImage: string;
  twitterCreator: string;


  constructor(
    twitterTitle: string,
    twitterDescription: string,
    twitterCreator: string,
    twitterImage: string,
    twitterCard: TwitterCard,
  ) {
    this.twitterCard = twitterCard;
    this.twitterDescription = twitterDescription;
    this.twitterTitle = twitterTitle;
    this.twitterImage = twitterImage;
    this.twitterCreator = twitterCreator;
  }
}

export enum TwitterCard {
  SUMMARY_LARGE_IMAGE = 'summary_large_image'
}

const mainImage = OgImage.fromPicture(getUndefinedPictureMock());
