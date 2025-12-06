export enum EMesType {
    text = 'text',
    tag = 'tag'
}

export type TVKButton = {
    action: {
        type: string,
        payload: string,
        label: string
    },
    color: string
}

export type TResponse = {
    text: string,
    buttons: TVKButton[]
}

export type TRequest = {
    user_id: number,
    type: EMesType,
    text: string
}

export type TError = {
    error: number
}