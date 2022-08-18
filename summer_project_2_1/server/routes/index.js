// router.get('/test', (req, res) => {
//     res.send({ test: 'this is test!!' });
// });
const express = require('express');
const router = express();
const db = require('../config/db');

const SQL = 'SELECT * FROM user_info';

// http://localhost:4000/ 으로 접속 시 응답메시지 출력
router.get('/test', (req, res) => {
    // mysql 접속하기
    db.query(SQL, (err, data) => {
        if (!err) {
            // eslint-disable-next-line no-console
            console.log('mysql 접속완료');
            res.send({ products: data });
        } else {
            // eslint-disable-next-line no-console
            console.log('에러');
            res.send(err);
        }
    });
});

module.exports = router;
