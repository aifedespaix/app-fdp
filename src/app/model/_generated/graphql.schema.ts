
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum LikeEnum {
  LIKE = "LIKE",
  FUCK = "FUCK",
  DISLIKE = "DISLIKE",
  FDP = "FDP"
}

export enum Role {
  USER = "USER",
  AIFEDESPAIX = "AIFEDESPAIX"
}

export class ArticleEditInput {
  id: string;
  title?: string;
  published?: boolean;
  content?: string;
  description?: string;
  categoryId?: string;
  thumbnailId?: string;
  tags?: TagInput[];
}

export class ArticleInput {
  title: string;
  content: string;
  description: string;
  categoryId: string;
  thumbnailId: string;
  tags: TagInput[];
}

export class AudioInput {
  file: Upload;
  slice: SliceInput;
  title: string;
  description: string;
}

export class BoxInput {
  title: string;
  description: string;
  thumbnailId: string;
  tags: TagInput[];
}

export class BoxUpdateInput {
  id: string;
  title?: string;
  description?: string;
  thumbnailId?: string;
  tags?: TagInput[];
}

export class CategoryEditInput {
  id: string;
  name?: string;
  description?: string;
  pictureId?: string;
}

export class CategoryInput {
  name: string;
  description: string;
  pictureId: string;
}

export class CommentAnswerInput {
  parent: string;
  value: string;
}

export class CommentEditInput {
  id: string;
  value: string;
}

export class CommentInput {
  target: string;
  value: string;
}

export class LoginInput {
  login: string;
  password: string;
}

export class MenuInput {
  name: string;
}

export class MenuItemInput {
  icon: string;
  name: string;
  routerLink: string;
}

export class PaginationInput {
  skip?: number;
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}

export class PictureCreateInput {
  create?: ResourceInput[];
  connect?: string[];
}

export class PictureInput {
  title: string;
  description: string;
}

export class RegisterInput {
  email: string;
  login: string;
  password: string;
}

export class ResourceInput {
  title: string;
  description: string;
  url: string;
}

export class SliceInput {
  from: number;
  to: number;
}

export class TagInput {
  id?: string;
  value: string;
}

export class UserEditInput {
  avatarId?: string;
}

export class ArticleType {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  published: boolean;
  title: string;
  content: string;
  description: string;
  category: CategoryType;
  thumbnail: PictureType;
  author: UserType;
  likes?: LikeType[];
  tags?: TagType[];
  comments?: CommentType[];
}

export class BoxType {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  author: UserType;
  title: string;
  description: string;
  thumbnail: PictureType;
  sound: ResourceType;
  tags: TagType[];
  likes: LikeType[];
  comments: CommentType[];
}

export class CategoryType {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  name: string;
  description: string;
  picture: PictureType;
}

export class CommentType {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  isParent: boolean;
  value: string;
  author: UserType;
  parentCommentType: CommentType;
  childCommentTypes: CommentType[];
  likes: LikeType[];
  childs: CommentType[];
}

export class ImageType {
  id: string;
  url: string;
  width: number;
  height: number;
  mimetype: string;
}

export class LikeType {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  author: UserType;
  value: LikeEnum;
}

export class LoginType {
  user: UserType;
  token: string;
}

export class MenuItemType {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  icon: string;
  name: string;
  routerLink: string;
}

export class MenuType {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  name: string;
  items?: MenuItemType[];
}

export abstract class IMutation {
  abstract updateArticle(article: ArticleEditInput): ArticleType | Promise<ArticleType>;

  abstract createArticle(article: ArticleInput): ArticleType | Promise<ArticleType>;

  abstract authAifedespaix(secret: string): LoginType | Promise<LoginType>;

  abstract authRegister(data: RegisterInput): LoginType | Promise<LoginType>;

  abstract authLogin(login: LoginInput): LoginType | Promise<LoginType>;

  abstract createBox(box: BoxInput, sound: AudioInput): BoxType | Promise<BoxType>;

  abstract updateBox(box: BoxUpdateInput): BoxType | Promise<BoxType>;

  abstract deleteBox(id: string): BoxType | Promise<BoxType>;

  abstract createCategory(category: CategoryInput): CategoryType | Promise<CategoryType>;

  abstract updateCategory(category: CategoryEditInput): CategoryType | Promise<CategoryType>;

  abstract deleteCategory(id: string): CategoryType | Promise<CategoryType>;

  abstract createBoxComment(comment: CommentInput): CommentType | Promise<CommentType>;

  abstract createArticleComment(comment: CommentInput): CommentType | Promise<CommentType>;

  abstract updateComment(comment: CommentEditInput): CommentType | Promise<CommentType>;

  abstract deleteComment(id: string): CommentType | Promise<CommentType>;

  abstract createArticleLike(articleId: string, like: string): ArticleType | Promise<ArticleType>;

  abstract createBoxLike(boxId: string, like: string): BoxType | Promise<BoxType>;

  abstract createCommentLike(commentId: string, like: string): CommentType | Promise<CommentType>;

  abstract changeLike(likeId: string, like: string): boolean | Promise<boolean>;

  abstract createMenu(menu: MenuInput): MenuType | Promise<MenuType>;

  abstract addItem(item: MenuItemInput, name: string): MenuType | Promise<MenuType>;

  abstract createPicture(picture: PictureInput, file: Upload): PictureType | Promise<PictureType>;

  abstract createResourceAudio(audio?: AudioInput): ResourceType | Promise<ResourceType>;

  abstract deleteUser(id: string): UserType | Promise<UserType>;

  abstract editMyUser(user: UserEditInput): UserType | Promise<UserType>;
}

export class PictureType {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  author: UserType;
  title: string;
  description: string;
  images: ImageType[];
}

export class PlaylistStreamingType {
  plateform: string;
  playlists: PlaylistsType[];
}

export class PlaylistsType {
  name: string;
  iframe: string;
}

export class PlaylistYoutubeType {
  title: string;
  youtubeId: string;
  year: string;
}

export abstract class IQuery {
  abstract helloWorld(): string | Promise<string>;

  abstract articles(published?: boolean, pagination?: PaginationInput): ArticleType[] | Promise<ArticleType[]>;

  abstract article(id: string): ArticleType | Promise<ArticleType>;

  abstract myArticles(skip?: number, after?: number, before?: number, first?: number, last?: number): ArticleType[] | Promise<ArticleType[]>;

  abstract boxes(pagination?: PaginationInput): BoxType[] | Promise<BoxType[]>;

  abstract box(id: string): BoxType | Promise<BoxType>;

  abstract categories(pagination?: PaginationInput): CategoryType[] | Promise<CategoryType[]>;

  abstract category(id: string): CategoryType | Promise<CategoryType>;

  abstract myLikes(): LikeType[] | Promise<LikeType[]>;

  abstract menu(name: string): MenuType | Promise<MenuType>;

  abstract menus(): MenuType[] | Promise<MenuType[]>;

  abstract myPictures(skip?: number, after?: number, before?: number, first?: number, last?: number): PictureType[] | Promise<PictureType[]>;

  abstract resources(pagination?: PaginationInput): ResourceType[] | Promise<ResourceType[]>;

  abstract resource(id: string): ResourceType | Promise<ResourceType>;

  abstract tags(pagination?: PaginationInput): TagType[] | Promise<TagType[]>;

  abstract users(): UserType[] | Promise<UserType[]>;

  abstract myProfile(): UserType | Promise<UserType>;
}

export class ResourceType {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  title: string;
  description: string;
  url: string;
  author: UserType;
}

export class TagType {
  id?: string;
  createdAt?: DateTime;
  updatedAt?: DateTime;
  value: string;
}

export class UserType {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  login: string;
  email: string;
  role: Role;
  avatar?: PictureType;
  articles?: ArticleType[];
}

export type DateTime = any;
export type Upload = any;
