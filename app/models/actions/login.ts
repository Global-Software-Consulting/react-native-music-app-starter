export interface ILoginRequestState {
    type: string;
    username: string;
    password: string;
}

interface IResponse {
    id: number;
}

export interface ILoginResponseState {
    type: string;
    response: IResponse;
}
