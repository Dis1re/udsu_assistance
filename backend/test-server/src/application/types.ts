export type TMessage = {
    text: string,
    author: 'user' | 'bot'
}

export type TRequest = {
    history?: TMessage[],
    message: TMessage
}

export type TError = {
    error: number
}