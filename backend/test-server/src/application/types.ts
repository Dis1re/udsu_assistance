export type TMessage = {
    text: string,
    author: 'user' | 'bot'
}

export type TRequest = {
    message: TMessage,
    history?: TMessage[],
    tags?: string[]
}

export type TError = {
    error: number
}