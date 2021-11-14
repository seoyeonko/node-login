'use strict';

class UserStorage {
  // static: 정적 변수 선언 - 클래스 자체에서 접근 가능
  // #: public -> private: 은닉화
  static #users = {
    id: ['apple', 'orange', 'banana'],
    psword: ['1234', '1234', '123456'],
    name: ['사과', '오렌지', '바나나'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // users의 key값만 배열에 저장 => [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
}

module.exports = UserStorage;
