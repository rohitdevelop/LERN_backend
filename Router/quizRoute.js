const express = require('express');
const router = express.Router();

const { getwebQuiz, postwebQuiz } = require('../Cantroller/webquize');
const { gethtmlQuiz, posthtmlQuiz } = require('../Cantroller/htmlquize');
const { getcssQuiz, postcssQuiz } = require('../Cantroller/cssquize');
const { getjsQuiz, postjsQuiz } = require('../Cantroller/jsquize');
const { getreactQuiz, postreactQuiz } = require('../Cantroller/reactquize');
const { getnodeQuiz, postnodeQuiz } = require('../Cantroller/nodequize');
const { getexpressQuiz, postexpressQuiz } = require('../Cantroller/expressquize');
const { getmongoQuiz, postmongoQuiz } = require('../Cantroller/mongoquize');
const { signup, login } = require('../Cantroller/authCantroler');

router.post('/signup', signup);
router.post('/login', login);

// Web Fundamentals Quiz
router.get('/questions', getwebQuiz);
router.post('/submit', postwebQuiz);
// HTML Quiz
router.get('/htmlquestions', gethtmlQuiz);
router.post('/htmlsubmit', posthtmlQuiz);

// CSS Quiz
router.get('/cssquestions', getcssQuiz);
router.post('/csssubmit', postcssQuiz);

// JavaScript Quiz
router.get('/javascriptquestions', getjsQuiz);
router.post('/javascriptsubmit', postjsQuiz);

// React Quiz
router.get('/reactquestions', getreactQuiz);
router.post('/reactsubmit', postreactQuiz);

// Node.js Quiz
router.get('/nodequestions', getnodeQuiz);
router.post('/nodesubmit', postnodeQuiz);

// express Quize
router.get('/expressquestions', getexpressQuiz);  
router.post('/expresssubmit', postexpressQuiz);   

// MongoDB Quiz
router.get('/mongoquestions', getmongoQuiz);
router.post('/mongosubmit', postmongoQuiz);

module.exports = router;
