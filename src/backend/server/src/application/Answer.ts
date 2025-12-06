import { TError, TResponse } from "./types";

export const codes: { [key: number]: string } = {
    [100]: 'bad request error',
    [200]: 'unknown message type',
    [9000]: 'unknown error'
}

class Answer {
    result: 'ok' | 'error';
    data?: TResponse;
    error?: {
        code: number;
        text: string;
    };

    constructor(data: TResponse | TError) {
        if (data instanceof Object && 'error' in data) {
            const code = data.error || 9000;
            this.result = 'error';
            this.error = {
                code: code,
                text: codes[code] || 'unknown error'
            };
        } else {
            this.result = 'ok';
            this.data = data;
        }
    }
}

export default Answer;