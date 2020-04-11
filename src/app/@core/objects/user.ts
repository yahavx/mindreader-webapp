export class User {
  birthday: number;
  gender: string;
  user_id: number;
  username: string;

  constructor(birthday: number, gender: string, user_id: number, username: string) {
    this.birthday = birthday;
    this.gender = gender;
    this.user_id = user_id;
    this.username = username;
  }
}

export class UserMD {
  user_id: number;
  username: string;

  constructor(user_id: number, username: string) {
    this.user_id = user_id;
    this.username = username;
  }
}
