
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
  title?: string;
  published?: boolean;
  content?: string;
  description?: string;
  thumbnailId?: string;
  tags?: string[];
}

export class ArticleInput {
  title: string;
  content: string;
  description: string;
  thumbnailId: string;
  tags?: string[];
}

export class BoxInput {
  description: string;
  title: string;
}

export class CommentInput {
  parent?: string;
  comment: string;
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

export class ResourceCreateInput {
  create: ResourceInput;
  connect: ResourceInput;
}

export class ResourceCreateManyInput {
  create?: ResourceInput[];
  connect?: ResourceInput[];
}

export class ResourceInput {
  title: string;
  description: string;
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
  isParent: boolean;
  value: string;
  author: UserType;
  description: string;
  title: string;
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
  abstract updateArticle(article: ArticleEditInput, articleId: string): ArticleType | Promise<ArticleType>;

  abstract createArticle(article: ArticleInput): ArticleType | Promise<ArticleType>;

  abstract createArticleComment(articleId: string, comment: string): ArticleType | Promise<ArticleType>;

  abstract createBoxComment(boxId: string, comment: string): ArticleType | Promise<ArticleType>;

  abstract createCommentAnswer(parentId: string, comment: string): CommentType | Promise<CommentType>;

  abstract authAifedespaix(secret: string): LoginType | Promise<LoginType>;

  abstract authRegister(data: RegisterInput): LoginType | Promise<LoginType>;

  abstract authLogin(login: LoginInput): LoginType | Promise<LoginType>;

  abstract createBox(data: BoxInput): BoxType | Promise<BoxType>;

  abstract createArticleLike(articleId: string, like: string): ArticleType | Promise<ArticleType>;

  abstract createBoxLike(boxId: string, like: string): BoxType | Promise<BoxType>;

  abstract createCommentLike(commentId: string, like: string): CommentType | Promise<CommentType>;

  abstract changeLike(likeId: string, like: string): boolean | Promise<boolean>;

  abstract createMenu(menu: MenuInput): MenuType | Promise<MenuType>;

  abstract addItem(item: MenuItemInput, name: string): MenuType | Promise<MenuType>;

  abstract createPicture(picture: PictureInput, file: Upload): PictureType | Promise<PictureType>;

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

export abstract class IQuery {
  abstract helloWorld(): string | Promise<string>;

  abstract articles(skip?: number, after?: number, before?: number, first?: number, last?: number): ArticleType[] | Promise<ArticleType[]>;

  abstract article(id: string): ArticleType | Promise<ArticleType>;

  abstract myArticles(skip?: number, after?: number, before?: number, first?: number, last?: number): ArticleType[] | Promise<ArticleType[]>;

  abstract boxes(skip?: number, after?: number, before?: number, first?: number, last?: number): BoxType[] | Promise<BoxType[]>;

  abstract box(id: string): BoxType | Promise<BoxType>;

  abstract myComments(): CommentType[] | Promise<CommentType[]>;

  abstract myLikes(): LikeType[] | Promise<LikeType[]>;

  abstract menu(name: string): MenuType | Promise<MenuType>;

  abstract menus(): MenuType[] | Promise<MenuType[]>;

  abstract myPictures(skip?: number, after?: number, before?: number, first?: number, last?: number): PictureType[] | Promise<PictureType[]>;

  abstract resources(skip?: number, after?: number, before?: number, first?: number, last?: number): ResourceType[] | Promise<ResourceType[]>;

  abstract tags(skip?: number, after?: number, before?: number, first?: number, last?: number): TagType[] | Promise<TagType[]>;

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
}

export class TagType {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
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
