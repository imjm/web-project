const express = require('express');
const router = express.Router();
//const structjson = require('./structjson.js');
const dialogflow = require('dialogflow');
const uuid = require('uuid');

const config = require('../config/key');

const projectId = config.googleProjectID
const sessionId = config.dialogFlowSessionID
const languageCode = config.dialogFlowSessionLanguageCode


// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);


// 텍스트 쿼리 라우트
router.post('/textQuery', async (req, res) => {
    
    // 클라이언트로 정보를 보냄

    const request = {
        session: sessionPath,
        queryInput: {
            text: { 
                text: req.body.text,
                // 사용자가 사용할 언어
                languageCode: languageCode,
            },
        },
    };

    // request를 보내고 log를 출력한다.
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
})


// 이벤트 쿼리 라우트
router.post('/eventQuery', async (req, res) => {
    //클라이언트에서 dialogflow api로 보낼 정보가 필요하다.
    // The text query request
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                // The query to send to the dialogflow agent
                name: req.body.event,
                // 클라이언트가 쓰는 언어
                languageCode: languageCode,
            },
        },
    };

    //request를 보내고 log 출력
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
})






module.exports = router;

