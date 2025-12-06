import { TResponse } from "./types";

type TError = {
    code: number;
    text: string;
}

export const codes: { [key: number]: string } = {
    [100]: 'bad request error',
    [9000]: 'unknown error'
}

class Answer {
    result: 'ok' | 'error';
    data?: TResponse;
    error?: TError;

    constructor(data: TResponse) {
        if (data instanceof Object && 'error' in data) {
            const code = (data as { error?: number }).error || 9000;
            this.result = 'error';
            this.error = {
                code: code,
                text: codes[code] || codes[9000]
            };
        } else {
            this.result = 'ok';
            this.data = data;
        }
    }
}

export default Answer;