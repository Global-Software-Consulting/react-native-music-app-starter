import { playerReducer } from '../../../../app/store/reducers/playerReducer';

describe('player reducer tests', () => {
    test('should return the initial state', () =>
        expect(playerReducer(undefined, {})).toEqual({
            playerList: null,
            isPlayer: false,
            isPlayerPlay: false,
            playList: [],
        }));

    test('should return player list', () => {
        expect(
            playerReducer(
                {},
                {
                    type: 'PLAYER_LIST_REQUEST',
                    payload: ["Playerlist"],
                },
            ),
        ).toEqual({ playerList: ["Playerlist"] });
    });
    test('should return player list', () => {
        expect(
            playerReducer(
                {},
                {
                    type: 'ISPLAYER_SHOWN',
                    payload: "isPlayerPlay",

                },
            ),
        ).toEqual({ isPlayer: "isPlayerPlay" });
    });

    //test for showing playing state in bottom and full screen

    test('should return player list', () => {
        expect(
            playerReducer(
                {},
                {
                    type: 'MUSIC_PLAYER_PLAY',
                    payload: "isPlayerPlay",

                },
            ),
        ).toEqual({ isPlayerPlay: "isPlayerPlay" });
    });

});