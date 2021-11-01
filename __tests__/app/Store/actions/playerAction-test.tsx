import * as actions from '../../../../app/store/actions/playerActions';
import * as type from "../../../../app/store/actions/types";

describe('Player Actions', () => {

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'PLAYER_LIST_REQUEST',
        };
        expect(actions.playerListRequest()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'MUSIC_PLAYER_PLAY',
        };
        expect(actions.isPlayerPlay()).toEqual(expectedAction);
    });
    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'ISPLAYER_SHOWN',
        };
        expect(actions.isPlayerShow()).toEqual(expectedAction);
    });
    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'UPDATE_PLAY_LIST',
        };
        expect(actions.updatePlayList()).toEqual(expectedAction);
    });
    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'DELETE_PLAY_LIST',
        };
        expect(actions.deletePlayListFolder()).toEqual(expectedAction);
    });
    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'DELETE_SONG_IN_PLAYLIST',
        };
        expect(actions.deletePlayListSong()).toEqual(expectedAction);
    });
});
