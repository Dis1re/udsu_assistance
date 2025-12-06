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
            return {  // переписать нормально под тип Error
                text: "ошибка",
                buttons: []
            }
        }
    }
}

const resultGET = (url?: string): any => resultPOST(url);

server.listen(PORT, HOST, () => {
    console.log(`Сервер работает на http://${HOST}:${PORT}`);
});