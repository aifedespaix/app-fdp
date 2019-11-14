
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

export class ArticleInput {
    title: string;
    content: string;
    tags?: string[];
}

export class BoxInput {
    description: string;
    title: string;
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

export class RegisterInput {
    email: string;
    login: string;
    password: string;
}

export class ArticleType {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    title: string;
    content: string;
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

export class FdpType {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
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
    abstract deleteUser(id: string): UserType | Promise<UserType>;
    abstract createArticle(article: ArticleInput): ArticleType | Promise<ArticleType>;
    abstract aifedespaix(secret: string): LoginType | Promise<LoginType>;
    abstract register(data: RegisterInput): LoginType | Promise<LoginType>;
    abstract login(login: LoginInput): LoginType | Promise<LoginType>;
    abstract createArticleLike(articleId: string, like: string): ArticleType | Promise<ArticleType>;
    abstract createBoxLike(boxId: string, like: string): BoxType | Promise<BoxType>;
    abstract createCommentLike(commentId: string, like: string): CommentType | Promise<CommentType>;
    abstract changeLike(likeId: string, like: string): boolean | Promise<boolean>;
    abstract createArticleComment(articleId: string, comment: string): ArticleType | Promise<ArticleType>;
    abstract createBoxComment(boxId: string, comment: string): ArticleType | Promise<ArticleType>;
    abstract createCommentAnswer(parentId: string, comment: string): CommentType | Promise<CommentType>;
    abstract createMenu(menu: MenuInput): MenuType | Promise<MenuType>;
    abstract addItem(item: MenuItemInput, name: string): MenuType | Promise<MenuType>;
    abstract createBox(data: BoxInput): BoxType | Promise<BoxType>;
}

export abstract class IQuery {
    abstract getUsers(): UserType[] | Promise<UserType[]>;
    abstract myProfile(): UserType | Promise<UserType>;
    abstract articles(skip?: number, after?: string, before?: string, first?: number, last?: number): ArticleType[] | Promise<ArticleType[]>;
    abstract article(id: string): ArticleType | Promise<ArticleType>;
    abstract myArticles(skip?: number, after?: string, before?: string, first?: number, last?: number): ArticleType[] | Promise<ArticleType[]>;
    abstract myLikes(): LikeType[] | Promise<LikeType[]>;
    abstract myComments(): CommentType[] | Promise<CommentType[]>;
    abstract menu(name: string): MenuType | Promise<MenuType>;
    abstract menus(): MenuType[] | Promise<MenuType[]>;
    abstract boxes(skip?: number, after?: string, before?: string, first?: number, last?: number): BoxType[] | Promise<BoxType[]>;
    abstract box(id: string): BoxType | Promise<BoxType>;
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
    articles: ArticleType[];
}

export type DateTime = any;
