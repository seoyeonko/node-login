'use strict';

const UserStorage = require('../../models/UserStorage');

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    const users = UserStorage.getUsers('id', 'psword'); // UserStoarage 클래스의 id, psword 필드에 접근

    const response = {}; // Object
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        response.success = true; // { success: true }
        return res.json(response);
      }
    }

    response.success = false; // { success: false }
    response.msg = '로그인에 실패하셨습니다.'; // { success: false, msg : '실패' }
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
