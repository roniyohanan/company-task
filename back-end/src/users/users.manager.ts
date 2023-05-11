import data from './users.data.json';

export class UsersManager {
  static getByUserName(username: string): Number {
    if (!data.users[username]){
      throw new Error('User not exist');
    }
    const credit = data.users[username];
    return credit;
  }

  static updateCredit(username: string): Number {
    data.users[username] = data.users[username] - 1;
    const updateCredit = data.users[username];
    return updateCredit;
  }
}
