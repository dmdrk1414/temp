// router.get('/test', (req, res) => {
//     res.send({ test: 'this is test!!' });
// });
const express = require('express');
const router = express();

// http://localhost:8080/ 으로 접속 시 응답메시지 출력
router.get('/login', (req, res) => {
    res.send('res.send() 두 번 써보기');
});

module.exports = router;
