import * as http from 'http';
import CONFIG from './config';
import Answer from './application/Answer';
import plugLM from './application/languageModel/plugLM';
import plugDB from './application/dataBase/plugDB';

const { HOST, PORT } = CONFIG;

const neuro = plugLM;
const db = plugDB;

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    const data = req.method === 'POST' ? await getRequestBody(req) : req.url;

    const answer = result(data);

    res.statusCode = 200;
    res.end(JSON.stringify(new Answer(answer)));
});

const getRequestBody = (request: http.IncomingMessage): Promise<any> => {
    return new Promise(resolve => {
        let body = '';

        request.on('data', (chunk) => {
            body += chunk.toString();
        });

        request.on('end', () => {
            try {
                const request = JSON.parse(body);
                resolve(request);
            } catch (error) {
                resolve({ error: 100 });
            }
        });
    });
}

const result = (data: any) => {
    let dbAnswer = '';
    Object.values(neuro.getTags(data.message || '')).forEach(tags => tags.forEach(tag => dbAnswer += `${db.getInfo(tag)}|`));
    return {
        youMessage: data,
        backMessage: "it's backend",
        neuroMessage: neuro.produceAnswer(data.message || '', ''),
        dbMessage: dbAnswer
    };
}

server.listen(PORT, HOST, () => {
    console.log(`Сервер работает на http://${HOST}:${PORT}`);
});