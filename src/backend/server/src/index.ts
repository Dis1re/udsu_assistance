import * as http from 'http';
import CONFIG from './config';
import Answer from './application/Answer';
import plugLM from './application/languageModel/plugLM';
import plugDB from './application/dataBase/plugDB';
import { EMesType, TError, TRequest, TResponse } from './application/types';
import { IDataBase } from './application/dataBase/dataBase';
import { ILanguageModel } from './application/languageModel/languageModel';

const { HOST, PORT } = CONFIG;

const neuro: ILanguageModel = plugLM;
const db: IDataBase = plugDB;

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    const answer = req.method === 'POST' ?
        resultPOST(await getRequestBody<TRequest>(req)) :
        resultGET(req.url);
    console.log(`вышло: ${answer}`);
    res.statusCode = 200;
    res.end(JSON.stringify(new Answer(answer)));
});

const getRequestBody = <T>(request: http.IncomingMessage): Promise<T | TError> => {
    return new Promise(resolve => {
        let body = '';

        request.on('data', (chunk) => {
            body += chunk.toString();
        });

        request.on('end', () => {
            try {
                const request: T = JSON.parse(body);
                resolve(request);
            } catch (error) {
                resolve({ error: 100 });
            }
        });
    });
}

const resultPOST = (data: any): TResponse => {
    console.log(`пришло:${data}`)
    let dbAnswer = '';
    if (data.type == EMesType.text){
        return {
            text: "ответ бэка: " + data.text,
            buttons: []
        }
    } else {
        if (data.type == EMesType.tag) {
            return {
                text: "ответ бэка тэговый: " + data.text,
                buttons: []
            }
        } else {
            return {
                text: "ошибка",
                buttons: []
            }
        }
    }      
    // Object.values(neuro.getTags(data.message || '')).forEach(tags => tags.forEach(tag => dbAnswer += `${db.getInfo(tag)}|`));
    // return {
    //     youMessage: data,
    //     backMessage: "it's backend",
    //     neuroMessage: neuro.produceAnswer(data.message || '', ''),
    //     dbMessage: dbAnswer
    // };
}

const resultGET = (url?: string): any => resultPOST(url);

server.listen(PORT, HOST, () => {
    console.log(`Сервер работает на http://${HOST}:${PORT}`);
});