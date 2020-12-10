/**
 * 서버 쪽에 더 많은 api를 추가하기 위해서 express 함수로부터 router를 불러온다.
 */


const express = require('express');
const router = express.Router();
router.get('/',(req,res) => res.json({username:'정다훈222'}));
router.get('/group',(req, res) => res.json({username:'정다훈 333 group'}));
module.exports = router;