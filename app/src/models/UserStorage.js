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
}

module.exports = UserStorage;
