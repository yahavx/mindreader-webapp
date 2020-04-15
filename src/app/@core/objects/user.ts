export class User {
  birthday: number;
  gender: string;
  userId: number;
  username: string;

  constructor(birthday: number, gender: string, userId: number, username: string) {
    this.birthday = birthday;
    this.gender = gender;
    this.userId = userId;
    this.username = username;
  }
}

export class UserMD {
  userId: number;
  username: string;

  constructor(userId: number, username: string) {
    this.userId = userId;
    this.username = username;
  }
}
