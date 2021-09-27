export interface PlayerState {
  isPlayer:Boolean;
  isPlayerPlay:Boolean;
  playerList: any;
  playList: playlist[];
}
type playlist={
  name:string;
  songs:songs[];
}
type songs={
  id?: string;
    title?: string;
    url?: string;
    artwork?: string;
    artist?: string;
}