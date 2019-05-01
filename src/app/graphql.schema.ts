
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum AddressOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    deleted_ASC = "deleted_ASC",
    deleted_DESC = "deleted_DESC",
    line1_ASC = "line1_ASC",
    line1_DESC = "line1_DESC",
    line2_ASC = "line2_ASC",
    line2_DESC = "line2_DESC",
    city_ASC = "city_ASC",
    city_DESC = "city_DESC",
    country_ASC = "country_ASC",
    country_DESC = "country_DESC",
    zip_ASC = "zip_ASC",
    zip_DESC = "zip_DESC",
    state_ASC = "state_ASC",
    state_DESC = "state_DESC"
}

export enum BoxOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    deleted_ASC = "deleted_ASC",
    deleted_DESC = "deleted_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC"
}

export enum FileOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    deleted_ASC = "deleted_ASC",
    deleted_DESC = "deleted_DESC",
    lastModified_ASC = "lastModified_ASC",
    lastModified_DESC = "lastModified_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    size_ASC = "size_ASC",
    size_DESC = "size_DESC",
    type_ASC = "type_ASC",
    type_DESC = "type_DESC",
    base64_ASC = "base64_ASC",
    base64_DESC = "base64_DESC",
    description_ASC = "description_ASC",
    description_DESC = "description_DESC"
}

export enum MenuItemOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    deleted_ASC = "deleted_ASC",
    deleted_DESC = "deleted_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    routerLink_ASC = "routerLink_ASC",
    routerLink_DESC = "routerLink_DESC",
    icon_ASC = "icon_ASC",
    icon_DESC = "icon_DESC"
}

export enum MenuOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    deleted_ASC = "deleted_ASC",
    deleted_DESC = "deleted_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum PersonOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    deleted_ASC = "deleted_ASC",
    deleted_DESC = "deleted_DESC",
    firstname_ASC = "firstname_ASC",
    firstname_DESC = "firstname_DESC",
    lastname_ASC = "lastname_ASC",
    lastname_DESC = "lastname_DESC"
}

export enum PostOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    deleted_ASC = "deleted_ASC",
    deleted_DESC = "deleted_DESC",
    published_ASC = "published_ASC",
    published_DESC = "published_DESC",
    title_ASC = "title_ASC",
    title_DESC = "title_DESC",
    content_ASC = "content_ASC",
    content_DESC = "content_DESC"
}

export enum UserLevel {
    AIFEDESPAIX = "AIFEDESPAIX",
    FDP = "FDP",
    USER = "USER"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    deleted_ASC = "deleted_ASC",
    deleted_DESC = "deleted_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    hpassword_ASC = "hpassword_ASC",
    hpassword_DESC = "hpassword_DESC",
    level_ASC = "level_ASC",
    level_DESC = "level_DESC"
}

export class AddressCreateInput {
    id?: string;
    deleted?: boolean;
    line1: string;
    line2?: string;
    city?: string;
    country?: string;
    zip?: string;
    state?: string;
}

export class AddressCreateOneInput {
    create?: AddressCreateInput;
    connect?: AddressWhereUniqueInput;
}

export class AddressSubscriptionWhereInput {
    AND: AddressSubscriptionWhereInput[];
    OR: AddressSubscriptionWhereInput[];
    NOT: AddressSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: AddressWhereInput;
}

export class AddressUpdateDataInput {
    deleted?: boolean;
    line1?: string;
    line2?: string;
    city?: string;
    country?: string;
    zip?: string;
    state?: string;
}

export class AddressUpdateInput {
    deleted?: boolean;
    line1?: string;
    line2?: string;
    city?: string;
    country?: string;
    zip?: string;
    state?: string;
}

export class AddressUpdateManyMutationInput {
    deleted?: boolean;
    line1?: string;
    line2?: string;
    city?: string;
    country?: string;
    zip?: string;
    state?: string;
}

export class AddressUpdateOneInput {
    create?: AddressCreateInput;
    connect?: AddressWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: AddressUpdateDataInput;
    upsert?: AddressUpsertNestedInput;
}

export class AddressUpsertNestedInput {
    update: AddressUpdateDataInput;
    create: AddressCreateInput;
}

export class AddressWhereInput {
    AND: AddressWhereInput[];
    OR: AddressWhereInput[];
    NOT: AddressWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    deleted?: boolean;
    deleted_not?: boolean;
    line1?: string;
    line1_not?: string;
    line1_in: string[];
    line1_not_in: string[];
    line1_lt?: string;
    line1_lte?: string;
    line1_gt?: string;
    line1_gte?: string;
    line1_contains?: string;
    line1_not_contains?: string;
    line1_starts_with?: string;
    line1_not_starts_with?: string;
    line1_ends_with?: string;
    line1_not_ends_with?: string;
    line2?: string;
    line2_not?: string;
    line2_in: string[];
    line2_not_in: string[];
    line2_lt?: string;
    line2_lte?: string;
    line2_gt?: string;
    line2_gte?: string;
    line2_contains?: string;
    line2_not_contains?: string;
    line2_starts_with?: string;
    line2_not_starts_with?: string;
    line2_ends_with?: string;
    line2_not_ends_with?: string;
    city?: string;
    city_not?: string;
    city_in: string[];
    city_not_in: string[];
    city_lt?: string;
    city_lte?: string;
    city_gt?: string;
    city_gte?: string;
    city_contains?: string;
    city_not_contains?: string;
    city_starts_with?: string;
    city_not_starts_with?: string;
    city_ends_with?: string;
    city_not_ends_with?: string;
    country?: string;
    country_not?: string;
    country_in: string[];
    country_not_in: string[];
    country_lt?: string;
    country_lte?: string;
    country_gt?: string;
    country_gte?: string;
    country_contains?: string;
    country_not_contains?: string;
    country_starts_with?: string;
    country_not_starts_with?: string;
    country_ends_with?: string;
    country_not_ends_with?: string;
    zip?: string;
    zip_not?: string;
    zip_in: string[];
    zip_not_in: string[];
    zip_lt?: string;
    zip_lte?: string;
    zip_gt?: string;
    zip_gte?: string;
    zip_contains?: string;
    zip_not_contains?: string;
    zip_starts_with?: string;
    zip_not_starts_with?: string;
    zip_ends_with?: string;
    zip_not_ends_with?: string;
    state?: string;
    state_not?: string;
    state_in: string[];
    state_not_in: string[];
    state_lt?: string;
    state_lte?: string;
    state_gt?: string;
    state_gte?: string;
    state_contains?: string;
    state_not_contains?: string;
    state_starts_with?: string;
    state_not_starts_with?: string;
    state_ends_with?: string;
    state_not_ends_with?: string;
}

export class AddressWhereUniqueInput {
    id?: string;
}

export class BoxCreateInput {
    id?: string;
    deleted?: boolean;
    name: string;
    description?: string;
    author: UserCreateOneWithoutBoxesInput;
    miniature: FileCreateOneInput;
    sound: FileCreateOneInput;
}

export class BoxCreateManyWithoutAuthorInput {
    create: BoxCreateWithoutAuthorInput[];
    connect: BoxWhereUniqueInput[];
}

export class BoxCreateWithoutAuthorInput {
    id?: string;
    deleted?: boolean;
    name: string;
    description?: string;
    miniature: FileCreateOneInput;
    sound: FileCreateOneInput;
}

export class BoxScalarWhereInput {
    AND: BoxScalarWhereInput[];
    OR: BoxScalarWhereInput[];
    NOT: BoxScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    deleted?: boolean;
    deleted_not?: boolean;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    description?: string;
    description_not?: string;
    description_in: string[];
    description_not_in: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
}

export class BoxSubscriptionWhereInput {
    AND: BoxSubscriptionWhereInput[];
    OR: BoxSubscriptionWhereInput[];
    NOT: BoxSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: BoxWhereInput;
}

export class BoxUpdateInput {
    deleted?: boolean;
    name?: string;
    description?: string;
    author?: UserUpdateOneRequiredWithoutBoxesInput;
    miniature?: FileUpdateOneRequiredInput;
    sound?: FileUpdateOneRequiredInput;
}

export class BoxUpdateManyDataInput {
    deleted?: boolean;
    name?: string;
    description?: string;
}

export class BoxUpdateManyMutationInput {
    deleted?: boolean;
    name?: string;
    description?: string;
}

export class BoxUpdateManyWithoutAuthorInput {
    create: BoxCreateWithoutAuthorInput[];
    connect: BoxWhereUniqueInput[];
    set: BoxWhereUniqueInput[];
    disconnect: BoxWhereUniqueInput[];
    delete: BoxWhereUniqueInput[];
    update: BoxUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany: BoxUpdateManyWithWhereNestedInput[];
    deleteMany: BoxScalarWhereInput[];
    upsert: BoxUpsertWithWhereUniqueWithoutAuthorInput[];
}

export class BoxUpdateManyWithWhereNestedInput {
    where: BoxScalarWhereInput;
    data: BoxUpdateManyDataInput;
}

export class BoxUpdateWithoutAuthorDataInput {
    deleted?: boolean;
    name?: string;
    description?: string;
    miniature?: FileUpdateOneRequiredInput;
    sound?: FileUpdateOneRequiredInput;
}

export class BoxUpdateWithWhereUniqueWithoutAuthorInput {
    where: BoxWhereUniqueInput;
    data: BoxUpdateWithoutAuthorDataInput;
}

export class BoxUpsertWithWhereUniqueWithoutAuthorInput {
    where: BoxWhereUniqueInput;
    update: BoxUpdateWithoutAuthorDataInput;
    create: BoxCreateWithoutAuthorInput;
}

export class BoxWhereInput {
    AND: BoxWhereInput[];
    OR: BoxWhereInput[];
    NOT: BoxWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    deleted?: boolean;
    deleted_not?: boolean;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    description?: string;
    description_not?: string;
    description_in: string[];
    description_not_in: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
    author?: UserWhereInput;
    miniature?: FileWhereInput;
    sound?: FileWhereInput;
}

export class BoxWhereUniqueInput {
    id?: string;
}

export class FileCreateInput {
    id?: string;
    deleted?: boolean;
    lastModified?: DateTime;
    name: string;
    size: number;
    type: string;
    base64: string;
    description?: string;
}

export class FileCreateOneInput {
    create?: FileCreateInput;
    connect?: FileWhereUniqueInput;
}

export class FileSubscriptionWhereInput {
    AND: FileSubscriptionWhereInput[];
    OR: FileSubscriptionWhereInput[];
    NOT: FileSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: FileWhereInput;
}

export class FileUpdateDataInput {
    deleted?: boolean;
    lastModified?: DateTime;
    name?: string;
    size?: number;
    type?: string;
    base64?: string;
    description?: string;
}

export class FileUpdateInput {
    deleted?: boolean;
    lastModified?: DateTime;
    name?: string;
    size?: number;
    type?: string;
    base64?: string;
    description?: string;
}

export class FileUpdateManyMutationInput {
    deleted?: boolean;
    lastModified?: DateTime;
    name?: string;
    size?: number;
    type?: string;
    base64?: string;
    description?: string;
}

export class FileUpdateOneInput {
    create?: FileCreateInput;
    connect?: FileWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: FileUpdateDataInput;
    upsert?: FileUpsertNestedInput;
}

export class FileUpdateOneRequiredInput {
    create?: FileCreateInput;
    connect?: FileWhereUniqueInput;
    update?: FileUpdateDataInput;
    upsert?: FileUpsertNestedInput;
}

export class FileUpsertNestedInput {
    update: FileUpdateDataInput;
    create: FileCreateInput;
}

export class FileWhereInput {
    AND: FileWhereInput[];
    OR: FileWhereInput[];
    NOT: FileWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    deleted?: boolean;
    deleted_not?: boolean;
    lastModified?: DateTime;
    lastModified_not?: DateTime;
    lastModified_in: DateTime[];
    lastModified_not_in: DateTime[];
    lastModified_lt?: DateTime;
    lastModified_lte?: DateTime;
    lastModified_gt?: DateTime;
    lastModified_gte?: DateTime;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    size?: number;
    size_not?: number;
    size_in: number[];
    size_not_in: number[];
    size_lt?: number;
    size_lte?: number;
    size_gt?: number;
    size_gte?: number;
    type?: string;
    type_not?: string;
    type_in: string[];
    type_not_in: string[];
    type_lt?: string;
    type_lte?: string;
    type_gt?: string;
    type_gte?: string;
    type_contains?: string;
    type_not_contains?: string;
    type_starts_with?: string;
    type_not_starts_with?: string;
    type_ends_with?: string;
    type_not_ends_with?: string;
    base64?: string;
    base64_not?: string;
    base64_in: string[];
    base64_not_in: string[];
    base64_lt?: string;
    base64_lte?: string;
    base64_gt?: string;
    base64_gte?: string;
    base64_contains?: string;
    base64_not_contains?: string;
    base64_starts_with?: string;
    base64_not_starts_with?: string;
    base64_ends_with?: string;
    base64_not_ends_with?: string;
    description?: string;
    description_not?: string;
    description_in: string[];
    description_not_in: string[];
    description_lt?: string;
    description_lte?: string;
    description_gt?: string;
    description_gte?: string;
    description_contains?: string;
    description_not_contains?: string;
    description_starts_with?: string;
    description_not_starts_with?: string;
    description_ends_with?: string;
    description_not_ends_with?: string;
}

export class FileWhereUniqueInput {
    id?: string;
}

export class LoginInput {
    login: string;
    password: string;
}

export class MenuCreateInput {
    id?: string;
    deleted?: boolean;
    name: string;
    items?: MenuItemCreateManyInput;
}

export class MenuItemCreateInput {
    id?: string;
    deleted?: boolean;
    name: string;
    routerLink: string;
    icon?: string;
}

export class MenuItemCreateManyInput {
    create: MenuItemCreateInput[];
    connect: MenuItemWhereUniqueInput[];
}

export class MenuItemScalarWhereInput {
    AND: MenuItemScalarWhereInput[];
    OR: MenuItemScalarWhereInput[];
    NOT: MenuItemScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    deleted?: boolean;
    deleted_not?: boolean;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    routerLink?: string;
    routerLink_not?: string;
    routerLink_in: string[];
    routerLink_not_in: string[];
    routerLink_lt?: string;
    routerLink_lte?: string;
    routerLink_gt?: string;
    routerLink_gte?: string;
    routerLink_contains?: string;
    routerLink_not_contains?: string;
    routerLink_starts_with?: string;
    routerLink_not_starts_with?: string;
    routerLink_ends_with?: string;
    routerLink_not_ends_with?: string;
    icon?: string;
    icon_not?: string;
    icon_in: string[];
    icon_not_in: string[];
    icon_lt?: string;
    icon_lte?: string;
    icon_gt?: string;
    icon_gte?: string;
    icon_contains?: string;
    icon_not_contains?: string;
    icon_starts_with?: string;
    icon_not_starts_with?: string;
    icon_ends_with?: string;
    icon_not_ends_with?: string;
}

export class MenuItemSubscriptionWhereInput {
    AND: MenuItemSubscriptionWhereInput[];
    OR: MenuItemSubscriptionWhereInput[];
    NOT: MenuItemSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: MenuItemWhereInput;
}

export class MenuItemUpdateDataInput {
    deleted?: boolean;
    name?: string;
    routerLink?: string;
    icon?: string;
}

export class MenuItemUpdateInput {
    deleted?: boolean;
    name?: string;
    routerLink?: string;
    icon?: string;
}

export class MenuItemUpdateManyDataInput {
    deleted?: boolean;
    name?: string;
    routerLink?: string;
    icon?: string;
}

export class MenuItemUpdateManyInput {
    create: MenuItemCreateInput[];
    connect: MenuItemWhereUniqueInput[];
    set: MenuItemWhereUniqueInput[];
    disconnect: MenuItemWhereUniqueInput[];
    delete: MenuItemWhereUniqueInput[];
    update: MenuItemUpdateWithWhereUniqueNestedInput[];
    updateMany: MenuItemUpdateManyWithWhereNestedInput[];
    deleteMany: MenuItemScalarWhereInput[];
    upsert: MenuItemUpsertWithWhereUniqueNestedInput[];
}

export class MenuItemUpdateManyMutationInput {
    deleted?: boolean;
    name?: string;
    routerLink?: string;
    icon?: string;
}

export class MenuItemUpdateManyWithWhereNestedInput {
    where: MenuItemScalarWhereInput;
    data: MenuItemUpdateManyDataInput;
}

export class MenuItemUpdateWithWhereUniqueNestedInput {
    where: MenuItemWhereUniqueInput;
    data: MenuItemUpdateDataInput;
}

export class MenuItemUpsertWithWhereUniqueNestedInput {
    where: MenuItemWhereUniqueInput;
    update: MenuItemUpdateDataInput;
    create: MenuItemCreateInput;
}

export class MenuItemWhereInput {
    AND: MenuItemWhereInput[];
    OR: MenuItemWhereInput[];
    NOT: MenuItemWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    deleted?: boolean;
    deleted_not?: boolean;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    routerLink?: string;
    routerLink_not?: string;
    routerLink_in: string[];
    routerLink_not_in: string[];
    routerLink_lt?: string;
    routerLink_lte?: string;
    routerLink_gt?: string;
    routerLink_gte?: string;
    routerLink_contains?: string;
    routerLink_not_contains?: string;
    routerLink_starts_with?: string;
    routerLink_not_starts_with?: string;
    routerLink_ends_with?: string;
    routerLink_not_ends_with?: string;
    icon?: string;
    icon_not?: string;
    icon_in: string[];
    icon_not_in: string[];
    icon_lt?: string;
    icon_lte?: string;
    icon_gt?: string;
    icon_gte?: string;
    icon_contains?: string;
    icon_not_contains?: string;
    icon_starts_with?: string;
    icon_not_starts_with?: string;
    icon_ends_with?: string;
    icon_not_ends_with?: string;
}

export class MenuItemWhereUniqueInput {
    id?: string;
}

export class MenuSubscriptionWhereInput {
    AND: MenuSubscriptionWhereInput[];
    OR: MenuSubscriptionWhereInput[];
    NOT: MenuSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: MenuWhereInput;
}

export class MenuUpdateInput {
    deleted?: boolean;
    name?: string;
    items?: MenuItemUpdateManyInput;
}

export class MenuUpdateManyMutationInput {
    deleted?: boolean;
    name?: string;
}

export class MenuWhereInput {
    AND: MenuWhereInput[];
    OR: MenuWhereInput[];
    NOT: MenuWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    deleted?: boolean;
    deleted_not?: boolean;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    items_every?: MenuItemWhereInput;
    items_some?: MenuItemWhereInput;
    items_none?: MenuItemWhereInput;
}

export class MenuWhereUniqueInput {
    id?: string;
    name?: string;
}

export class PersonCreateInput {
    id?: string;
    deleted?: boolean;
    firstname?: string;
    lastname?: string;
    address?: AddressCreateOneInput;
}

export class PersonCreateOneInput {
    create?: PersonCreateInput;
    connect?: PersonWhereUniqueInput;
}

export class PersonSubscriptionWhereInput {
    AND: PersonSubscriptionWhereInput[];
    OR: PersonSubscriptionWhereInput[];
    NOT: PersonSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: PersonWhereInput;
}

export class PersonUpdateDataInput {
    deleted?: boolean;
    firstname?: string;
    lastname?: string;
    address?: AddressUpdateOneInput;
}

export class PersonUpdateInput {
    deleted?: boolean;
    firstname?: string;
    lastname?: string;
    address?: AddressUpdateOneInput;
}

export class PersonUpdateManyMutationInput {
    deleted?: boolean;
    firstname?: string;
    lastname?: string;
}

export class PersonUpdateOneInput {
    create?: PersonCreateInput;
    connect?: PersonWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: PersonUpdateDataInput;
    upsert?: PersonUpsertNestedInput;
}

export class PersonUpsertNestedInput {
    update: PersonUpdateDataInput;
    create: PersonCreateInput;
}

export class PersonWhereInput {
    AND: PersonWhereInput[];
    OR: PersonWhereInput[];
    NOT: PersonWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    deleted?: boolean;
    deleted_not?: boolean;
    firstname?: string;
    firstname_not?: string;
    firstname_in: string[];
    firstname_not_in: string[];
    firstname_lt?: string;
    firstname_lte?: string;
    firstname_gt?: string;
    firstname_gte?: string;
    firstname_contains?: string;
    firstname_not_contains?: string;
    firstname_starts_with?: string;
    firstname_not_starts_with?: string;
    firstname_ends_with?: string;
    firstname_not_ends_with?: string;
    lastname?: string;
    lastname_not?: string;
    lastname_in: string[];
    lastname_not_in: string[];
    lastname_lt?: string;
    lastname_lte?: string;
    lastname_gt?: string;
    lastname_gte?: string;
    lastname_contains?: string;
    lastname_not_contains?: string;
    lastname_starts_with?: string;
    lastname_not_starts_with?: string;
    lastname_ends_with?: string;
    lastname_not_ends_with?: string;
    address?: AddressWhereInput;
}

export class PersonWhereUniqueInput {
    id?: string;
}

export class PostCreateInput {
    id?: string;
    deleted?: boolean;
    published?: boolean;
    title: string;
    content?: string;
    author: UserCreateOneWithoutPostsInput;
}

export class PostCreateManyWithoutAuthorInput {
    create: PostCreateWithoutAuthorInput[];
    connect: PostWhereUniqueInput[];
}

export class PostCreateWithoutAuthorInput {
    id?: string;
    deleted?: boolean;
    published?: boolean;
    title: string;
    content?: string;
}

export class PostScalarWhereInput {
    AND: PostScalarWhereInput[];
    OR: PostScalarWhereInput[];
    NOT: PostScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    deleted?: boolean;
    deleted_not?: boolean;
    published?: boolean;
    published_not?: boolean;
    title?: string;
    title_not?: string;
    title_in: string[];
    title_not_in: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    content?: string;
    content_not?: string;
    content_in: string[];
    content_not_in: string[];
    content_lt?: string;
    content_lte?: string;
    content_gt?: string;
    content_gte?: string;
    content_contains?: string;
    content_not_contains?: string;
    content_starts_with?: string;
    content_not_starts_with?: string;
    content_ends_with?: string;
    content_not_ends_with?: string;
}

export class PostSubscriptionWhereInput {
    AND: PostSubscriptionWhereInput[];
    OR: PostSubscriptionWhereInput[];
    NOT: PostSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: PostWhereInput;
}

export class PostUpdateInput {
    deleted?: boolean;
    published?: boolean;
    title?: string;
    content?: string;
    author?: UserUpdateOneRequiredWithoutPostsInput;
}

export class PostUpdateManyDataInput {
    deleted?: boolean;
    published?: boolean;
    title?: string;
    content?: string;
}

export class PostUpdateManyMutationInput {
    deleted?: boolean;
    published?: boolean;
    title?: string;
    content?: string;
}

export class PostUpdateManyWithoutAuthorInput {
    create: PostCreateWithoutAuthorInput[];
    connect: PostWhereUniqueInput[];
    set: PostWhereUniqueInput[];
    disconnect: PostWhereUniqueInput[];
    delete: PostWhereUniqueInput[];
    update: PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany: PostUpdateManyWithWhereNestedInput[];
    deleteMany: PostScalarWhereInput[];
    upsert: PostUpsertWithWhereUniqueWithoutAuthorInput[];
}

export class PostUpdateManyWithWhereNestedInput {
    where: PostScalarWhereInput;
    data: PostUpdateManyDataInput;
}

export class PostUpdateWithoutAuthorDataInput {
    deleted?: boolean;
    published?: boolean;
    title?: string;
    content?: string;
}

export class PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput;
    data: PostUpdateWithoutAuthorDataInput;
}

export class PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput;
    update: PostUpdateWithoutAuthorDataInput;
    create: PostCreateWithoutAuthorInput;
}

export class PostWhereInput {
    AND: PostWhereInput[];
    OR: PostWhereInput[];
    NOT: PostWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    deleted?: boolean;
    deleted_not?: boolean;
    published?: boolean;
    published_not?: boolean;
    title?: string;
    title_not?: string;
    title_in: string[];
    title_not_in: string[];
    title_lt?: string;
    title_lte?: string;
    title_gt?: string;
    title_gte?: string;
    title_contains?: string;
    title_not_contains?: string;
    title_starts_with?: string;
    title_not_starts_with?: string;
    title_ends_with?: string;
    title_not_ends_with?: string;
    content?: string;
    content_not?: string;
    content_in: string[];
    content_not_in: string[];
    content_lt?: string;
    content_lte?: string;
    content_gt?: string;
    content_gte?: string;
    content_contains?: string;
    content_not_contains?: string;
    content_starts_with?: string;
    content_not_starts_with?: string;
    content_ends_with?: string;
    content_not_ends_with?: string;
    author?: UserWhereInput;
}

export class PostWhereUniqueInput {
    id?: string;
}

export class RegisterInput {
    email: string;
    name: string;
    password: string;
}

export class UserCreateInput {
    id?: string;
    deleted?: boolean;
    email: string;
    name: string;
    hpassword: string;
    level?: UserLevel;
    avatar?: FileCreateOneInput;
    person?: PersonCreateOneInput;
    posts?: PostCreateManyWithoutAuthorInput;
    boxes?: BoxCreateManyWithoutAuthorInput;
    friends?: UserCreateManyInput;
}

export class UserCreateManyInput {
    create: UserCreateInput[];
    connect: UserWhereUniqueInput[];
}

export class UserCreateOneWithoutBoxesInput {
    create?: UserCreateWithoutBoxesInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateOneWithoutPostsInput {
    create?: UserCreateWithoutPostsInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateWithoutBoxesInput {
    id?: string;
    deleted?: boolean;
    email: string;
    name: string;
    hpassword: string;
    level?: UserLevel;
    avatar?: FileCreateOneInput;
    person?: PersonCreateOneInput;
    posts?: PostCreateManyWithoutAuthorInput;
    friends?: UserCreateManyInput;
}

export class UserCreateWithoutPostsInput {
    id?: string;
    deleted?: boolean;
    email: string;
    name: string;
    hpassword: string;
    level?: UserLevel;
    avatar?: FileCreateOneInput;
    person?: PersonCreateOneInput;
    boxes?: BoxCreateManyWithoutAuthorInput;
    friends?: UserCreateManyInput;
}

export class UserScalarWhereInput {
    AND: UserScalarWhereInput[];
    OR: UserScalarWhereInput[];
    NOT: UserScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    deleted?: boolean;
    deleted_not?: boolean;
    email?: string;
    email_not?: string;
    email_in: string[];
    email_not_in: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    hpassword?: string;
    hpassword_not?: string;
    hpassword_in: string[];
    hpassword_not_in: string[];
    hpassword_lt?: string;
    hpassword_lte?: string;
    hpassword_gt?: string;
    hpassword_gte?: string;
    hpassword_contains?: string;
    hpassword_not_contains?: string;
    hpassword_starts_with?: string;
    hpassword_not_starts_with?: string;
    hpassword_ends_with?: string;
    hpassword_not_ends_with?: string;
    level?: UserLevel;
    level_not?: UserLevel;
    level_in: UserLevel[];
    level_not_in: UserLevel[];
}

export class UserSubscriptionWhereInput {
    AND: UserSubscriptionWhereInput[];
    OR: UserSubscriptionWhereInput[];
    NOT: UserSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: UserWhereInput;
}

export class UserUpdateDataInput {
    deleted?: boolean;
    email?: string;
    name?: string;
    hpassword?: string;
    level?: UserLevel;
    avatar?: FileUpdateOneInput;
    person?: PersonUpdateOneInput;
    posts?: PostUpdateManyWithoutAuthorInput;
    boxes?: BoxUpdateManyWithoutAuthorInput;
    friends?: UserUpdateManyInput;
}

export class UserUpdateInput {
    deleted?: boolean;
    email?: string;
    name?: string;
    hpassword?: string;
    level?: UserLevel;
    avatar?: FileUpdateOneInput;
    person?: PersonUpdateOneInput;
    posts?: PostUpdateManyWithoutAuthorInput;
    boxes?: BoxUpdateManyWithoutAuthorInput;
    friends?: UserUpdateManyInput;
}

export class UserUpdateManyDataInput {
    deleted?: boolean;
    email?: string;
    name?: string;
    hpassword?: string;
    level?: UserLevel;
}

export class UserUpdateManyInput {
    create: UserCreateInput[];
    connect: UserWhereUniqueInput[];
    set: UserWhereUniqueInput[];
    disconnect: UserWhereUniqueInput[];
    delete: UserWhereUniqueInput[];
    update: UserUpdateWithWhereUniqueNestedInput[];
    updateMany: UserUpdateManyWithWhereNestedInput[];
    deleteMany: UserScalarWhereInput[];
    upsert: UserUpsertWithWhereUniqueNestedInput[];
}

export class UserUpdateManyMutationInput {
    deleted?: boolean;
    email?: string;
    name?: string;
    hpassword?: string;
    level?: UserLevel;
}

export class UserUpdateManyWithWhereNestedInput {
    where: UserScalarWhereInput;
    data: UserUpdateManyDataInput;
}

export class UserUpdateOneRequiredWithoutBoxesInput {
    create?: UserCreateWithoutBoxesInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutBoxesDataInput;
    upsert?: UserUpsertWithoutBoxesInput;
}

export class UserUpdateOneRequiredWithoutPostsInput {
    create?: UserCreateWithoutPostsInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutPostsDataInput;
    upsert?: UserUpsertWithoutPostsInput;
}

export class UserUpdateWithoutBoxesDataInput {
    deleted?: boolean;
    email?: string;
    name?: string;
    hpassword?: string;
    level?: UserLevel;
    avatar?: FileUpdateOneInput;
    person?: PersonUpdateOneInput;
    posts?: PostUpdateManyWithoutAuthorInput;
    friends?: UserUpdateManyInput;
}

export class UserUpdateWithoutPostsDataInput {
    deleted?: boolean;
    email?: string;
    name?: string;
    hpassword?: string;
    level?: UserLevel;
    avatar?: FileUpdateOneInput;
    person?: PersonUpdateOneInput;
    boxes?: BoxUpdateManyWithoutAuthorInput;
    friends?: UserUpdateManyInput;
}

export class UserUpdateWithWhereUniqueNestedInput {
    where: UserWhereUniqueInput;
    data: UserUpdateDataInput;
}

export class UserUpsertWithoutBoxesInput {
    update: UserUpdateWithoutBoxesDataInput;
    create: UserCreateWithoutBoxesInput;
}

export class UserUpsertWithoutPostsInput {
    update: UserUpdateWithoutPostsDataInput;
    create: UserCreateWithoutPostsInput;
}

export class UserUpsertWithWhereUniqueNestedInput {
    where: UserWhereUniqueInput;
    update: UserUpdateDataInput;
    create: UserCreateInput;
}

export class UserWhereInput {
    AND: UserWhereInput[];
    OR: UserWhereInput[];
    NOT: UserWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    deleted?: boolean;
    deleted_not?: boolean;
    email?: string;
    email_not?: string;
    email_in: string[];
    email_not_in: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    hpassword?: string;
    hpassword_not?: string;
    hpassword_in: string[];
    hpassword_not_in: string[];
    hpassword_lt?: string;
    hpassword_lte?: string;
    hpassword_gt?: string;
    hpassword_gte?: string;
    hpassword_contains?: string;
    hpassword_not_contains?: string;
    hpassword_starts_with?: string;
    hpassword_not_starts_with?: string;
    hpassword_ends_with?: string;
    hpassword_not_ends_with?: string;
    level?: UserLevel;
    level_not?: UserLevel;
    level_in: UserLevel[];
    level_not_in: UserLevel[];
    avatar?: FileWhereInput;
    person?: PersonWhereInput;
    posts_every?: PostWhereInput;
    posts_some?: PostWhereInput;
    posts_none?: PostWhereInput;
    boxes_every?: BoxWhereInput;
    boxes_some?: BoxWhereInput;
    boxes_none?: BoxWhereInput;
    friends_every?: UserWhereInput;
    friends_some?: UserWhereInput;
    friends_none?: UserWhereInput;
}

export class UserWhereUniqueInput {
    id?: string;
    email?: string;
    name?: string;
}

export interface Node {
    id: string;
}

export class Address implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    line1: string;
    line2?: string;
    city?: string;
    country?: string;
    zip?: string;
    state?: string;
}

export class AddressConnection {
    pageInfo: PageInfo;
    edges?: AddressEdge[];
    aggregate: AggregateAddress;
}

export class AddressEdge {
    node: Address;
    cursor: string;
}

export class AddressPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    line1: string;
    line2?: string;
    city?: string;
    country?: string;
    zip?: string;
    state?: string;
}

export class AddressSubscriptionPayload {
    mutation: MutationType;
    node?: Address;
    updatedFields: string[];
    previousValues?: AddressPreviousValues;
}

export class AggregateAddress {
    count: number;
}

export class AggregateBox {
    count: number;
}

export class AggregateFile {
    count: number;
}

export class AggregateMenu {
    count: number;
}

export class AggregateMenuItem {
    count: number;
}

export class AggregatePerson {
    count: number;
}

export class AggregatePost {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class Auth {
    user?: User;
    token?: Token;
}

export class BatchPayload {
    count: Long;
}

export class Box implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    name: string;
    description?: string;
    author: User;
    miniature: File;
    sound: File;
}

export class BoxConnection {
    pageInfo: PageInfo;
    edges?: BoxEdge[];
    aggregate: AggregateBox;
}

export class BoxEdge {
    node: Box;
    cursor: string;
}

export class BoxPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    name: string;
    description?: string;
}

export class BoxSubscriptionPayload {
    mutation: MutationType;
    node?: Box;
    updatedFields: string[];
    previousValues?: BoxPreviousValues;
}

export class File implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    lastModified?: DateTime;
    name: string;
    size: number;
    type: string;
    base64: string;
    description?: string;
}

export class FileConnection {
    pageInfo: PageInfo;
    edges?: FileEdge[];
    aggregate: AggregateFile;
}

export class FileEdge {
    node: File;
    cursor: string;
}

export class FilePreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    lastModified?: DateTime;
    name: string;
    size: number;
    type: string;
    base64: string;
    description?: string;
}

export class FileSubscriptionPayload {
    mutation: MutationType;
    node?: File;
    updatedFields: string[];
    previousValues?: FilePreviousValues;
}

export class Menu implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    name: string;
    items: MenuItem[];
}

export class MenuConnection {
    pageInfo: PageInfo;
    edges?: MenuEdge[];
    aggregate: AggregateMenu;
}

export class MenuEdge {
    node: Menu;
    cursor: string;
}

export class MenuItem implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    name: string;
    routerLink: string;
    icon?: string;
}

export class MenuItemConnection {
    pageInfo: PageInfo;
    edges?: MenuItemEdge[];
    aggregate: AggregateMenuItem;
}

export class MenuItemEdge {
    node: MenuItem;
    cursor: string;
}

export class MenuItemPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    name: string;
    routerLink: string;
    icon?: string;
}

export class MenuItemSubscriptionPayload {
    mutation: MutationType;
    node?: MenuItem;
    updatedFields: string[];
    previousValues?: MenuItemPreviousValues;
}

export class MenuPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    name: string;
}

export class MenuSubscriptionPayload {
    mutation: MutationType;
    node?: Menu;
    updatedFields: string[];
    previousValues?: MenuPreviousValues;
}

export abstract class IMutation {
    abstract authRegister(data?: RegisterInput): Auth | Promise<Auth>;

    abstract fileUpload(data?: Upload): File | Promise<File>;

    abstract createPost(data: PostCreateInput): Post | Promise<Post>;

    abstract createBox(data: BoxCreateInput): Box | Promise<Box>;

    abstract createMenu(data: MenuCreateInput): Menu | Promise<Menu>;

    abstract createAddress(data: AddressCreateInput): Address | Promise<Address>;

    abstract createMenuItem(data: MenuItemCreateInput): MenuItem | Promise<MenuItem>;

    abstract createUser(data: UserCreateInput): User | Promise<User>;

    abstract createPerson(data: PersonCreateInput): Person | Promise<Person>;

    abstract createFile(data: FileCreateInput): File | Promise<File>;

    abstract updatePost(data: PostUpdateInput, where: PostWhereUniqueInput): Post | Promise<Post>;

    abstract updateBox(data: BoxUpdateInput, where: BoxWhereUniqueInput): Box | Promise<Box>;

    abstract updateMenu(data: MenuUpdateInput, where: MenuWhereUniqueInput): Menu | Promise<Menu>;

    abstract updateAddress(data: AddressUpdateInput, where: AddressWhereUniqueInput): Address | Promise<Address>;

    abstract updateMenuItem(data: MenuItemUpdateInput, where: MenuItemWhereUniqueInput): MenuItem | Promise<MenuItem>;

    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;

    abstract updatePerson(data: PersonUpdateInput, where: PersonWhereUniqueInput): Person | Promise<Person>;

    abstract updateFile(data: FileUpdateInput, where: FileWhereUniqueInput): File | Promise<File>;

    abstract deletePost(where: PostWhereUniqueInput): Post | Promise<Post>;

    abstract deleteBox(where: BoxWhereUniqueInput): Box | Promise<Box>;

    abstract deleteMenu(where: MenuWhereUniqueInput): Menu | Promise<Menu>;

    abstract deleteAddress(where: AddressWhereUniqueInput): Address | Promise<Address>;

    abstract deleteMenuItem(where: MenuItemWhereUniqueInput): MenuItem | Promise<MenuItem>;

    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;

    abstract deletePerson(where: PersonWhereUniqueInput): Person | Promise<Person>;

    abstract deleteFile(where: FileWhereUniqueInput): File | Promise<File>;

    abstract upsertPost(where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput): Post | Promise<Post>;

    abstract upsertBox(where: BoxWhereUniqueInput, create: BoxCreateInput, update: BoxUpdateInput): Box | Promise<Box>;

    abstract upsertMenu(where: MenuWhereUniqueInput, create: MenuCreateInput, update: MenuUpdateInput): Menu | Promise<Menu>;

    abstract upsertAddress(where: AddressWhereUniqueInput, create: AddressCreateInput, update: AddressUpdateInput): Address | Promise<Address>;

    abstract upsertMenuItem(where: MenuItemWhereUniqueInput, create: MenuItemCreateInput, update: MenuItemUpdateInput): MenuItem | Promise<MenuItem>;

    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;

    abstract upsertPerson(where: PersonWhereUniqueInput, create: PersonCreateInput, update: PersonUpdateInput): Person | Promise<Person>;

    abstract upsertFile(where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput): File | Promise<File>;

    abstract updateManyPosts(data: PostUpdateManyMutationInput, where?: PostWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyBoxes(data: BoxUpdateManyMutationInput, where?: BoxWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyMenus(data: MenuUpdateManyMutationInput, where?: MenuWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyAddresses(data: AddressUpdateManyMutationInput, where?: AddressWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyMenuItems(data: MenuItemUpdateManyMutationInput, where?: MenuItemWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyPersons(data: PersonUpdateManyMutationInput, where?: PersonWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract updateManyFiles(data: FileUpdateManyMutationInput, where?: FileWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyPosts(where?: PostWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyBoxes(where?: BoxWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyMenus(where?: MenuWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyAddresses(where?: AddressWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyMenuItems(where?: MenuItemWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyPersons(where?: PersonWhereInput): BatchPayload | Promise<BatchPayload>;

    abstract deleteManyFiles(where?: FileWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export class Person implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    firstname?: string;
    lastname?: string;
    address?: Address;
}

export class PersonConnection {
    pageInfo: PageInfo;
    edges?: PersonEdge[];
    aggregate: AggregatePerson;
}

export class PersonEdge {
    node: Person;
    cursor: string;
}

export class PersonPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    firstname?: string;
    lastname?: string;
}

export class PersonSubscriptionPayload {
    mutation: MutationType;
    node?: Person;
    updatedFields: string[];
    previousValues?: PersonPreviousValues;
}

export class Post implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    published: boolean;
    title: string;
    content?: string;
    author: User;
}

export class PostConnection {
    pageInfo: PageInfo;
    edges?: PostEdge[];
    aggregate: AggregatePost;
}

export class PostEdge {
    node: Post;
    cursor: string;
}

export class PostPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    published: boolean;
    title: string;
    content?: string;
}

export class PostSubscriptionPayload {
    mutation: MutationType;
    node?: Post;
    updatedFields: string[];
    previousValues?: PostPreviousValues;
}

export abstract class IQuery {
    abstract authProfile(): User | Promise<User>;

    abstract authLogin(data?: LoginInput): Auth | Promise<Auth>;

    abstract posts(where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Post[] | Promise<Post[]>;

    abstract boxes(where?: BoxWhereInput, orderBy?: BoxOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Box[] | Promise<Box[]>;

    abstract menus(where?: MenuWhereInput, orderBy?: MenuOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Menu[] | Promise<Menu[]>;

    abstract addresses(where?: AddressWhereInput, orderBy?: AddressOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Address[] | Promise<Address[]>;

    abstract menuItems(where?: MenuItemWhereInput, orderBy?: MenuItemOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): MenuItem[] | Promise<MenuItem[]>;

    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;

    abstract persons(where?: PersonWhereInput, orderBy?: PersonOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Person[] | Promise<Person[]>;

    abstract files(where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): File[] | Promise<File[]>;

    abstract post(where: PostWhereUniqueInput): Post | Promise<Post>;

    abstract box(where: BoxWhereUniqueInput): Box | Promise<Box>;

    abstract menu(where: MenuWhereUniqueInput): Menu | Promise<Menu>;

    abstract address(where: AddressWhereUniqueInput): Address | Promise<Address>;

    abstract menuItem(where: MenuItemWhereUniqueInput): MenuItem | Promise<MenuItem>;

    abstract user(where: UserWhereUniqueInput): User | Promise<User>;

    abstract person(where: PersonWhereUniqueInput): Person | Promise<Person>;

    abstract file(where: FileWhereUniqueInput): File | Promise<File>;

    abstract postsConnection(where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): PostConnection | Promise<PostConnection>;

    abstract boxesConnection(where?: BoxWhereInput, orderBy?: BoxOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): BoxConnection | Promise<BoxConnection>;

    abstract menusConnection(where?: MenuWhereInput, orderBy?: MenuOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): MenuConnection | Promise<MenuConnection>;

    abstract addressesConnection(where?: AddressWhereInput, orderBy?: AddressOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): AddressConnection | Promise<AddressConnection>;

    abstract menuItemsConnection(where?: MenuItemWhereInput, orderBy?: MenuItemOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): MenuItemConnection | Promise<MenuItemConnection>;

    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;

    abstract personsConnection(where?: PersonWhereInput, orderBy?: PersonOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): PersonConnection | Promise<PersonConnection>;

    abstract filesConnection(where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): FileConnection | Promise<FileConnection>;

    abstract node(id: string): Node | Promise<Node>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract post(where?: PostSubscriptionWhereInput): PostSubscriptionPayload | Promise<PostSubscriptionPayload>;

    abstract box(where?: BoxSubscriptionWhereInput): BoxSubscriptionPayload | Promise<BoxSubscriptionPayload>;

    abstract menu(where?: MenuSubscriptionWhereInput): MenuSubscriptionPayload | Promise<MenuSubscriptionPayload>;

    abstract address(where?: AddressSubscriptionWhereInput): AddressSubscriptionPayload | Promise<AddressSubscriptionPayload>;

    abstract menuItem(where?: MenuItemSubscriptionWhereInput): MenuItemSubscriptionPayload | Promise<MenuItemSubscriptionPayload>;

    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;

    abstract person(where?: PersonSubscriptionWhereInput): PersonSubscriptionPayload | Promise<PersonSubscriptionPayload>;

    abstract file(where?: FileSubscriptionWhereInput): FileSubscriptionPayload | Promise<FileSubscriptionPayload>;
}

export class Token {
    accessToken?: string;
    expiresIn?: number;
}

export class User implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    email: string;
    name: string;
    hpassword: string;
    avatar?: File;
    person?: Person;
    posts: Post[];
    boxes: Box[];
    friends: User[];
    level: UserLevel;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges?: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    deleted: boolean;
    email: string;
    name: string;
    hpassword: string;
    level: UserLevel;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields: string[];
    previousValues?: UserPreviousValues;
}

export type DateTime = any;
export type Long = any;
export type Upload = any;
