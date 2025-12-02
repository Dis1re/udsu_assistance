export interface LanguageModel {
    getTags: (message: string, context?: string) => { [theme: string]: string[] };
    getContext: (messages: string | string[]) => string;
    produceAnswer: (message: string, info: string) => string;
}