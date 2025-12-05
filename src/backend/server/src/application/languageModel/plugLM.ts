import { ILanguageModel } from "./languageModel";

const plugLM: ILanguageModel = {
    getTags: (message, context) => ({
        ['money_help']: ['mat_help', 'dekanat'],
        ['physic_lesson']: ['map', 'dating', 'timesheet']
    }),
    getContext: messages => 'work, work, work',
    produceAnswer: (message, info) => `Добрый вечер, господин, сэр! ${message}`
}

export default plugLM;