type IResponse = {
    id?: string;
    name?: string;
    title?: string;
    url?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
};

export interface IMusicListResponse {
    type: string;
    response: IResponse;
}

export interface IFavoriteListRequest {
    type?: string;
    data?: string;
}
export interface Favorite {
    id?: string;
    name?: string;
    title?: string;
    url?: string;
    artwork?: string;
    artist?: string;
    duration?: number;
}
