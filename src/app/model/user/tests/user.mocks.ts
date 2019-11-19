import {Role, UserType} from '../../graphql.schema';
import * as faker from 'faker';
import {getResourceMock} from '../../resource/tests/resource.mock';

export function getUsersMock(): UserType[] {
  const users = [];
  for (let i = 0; i < faker.random.number(10) + 5; i++) {
    users.push(getUserMock());
  }
  return users;
}

export function getUserMock(): UserType {
  const user = new UserType();
  user.id = faker.random.uuid();
  user.login = faker.internet.userName();
  user.avatar = getResourceMock();
  user.avatar.url = faker.internet.avatar();
  user.email = faker.internet.email();
  user.role = Role.USER;
  return user;
}
