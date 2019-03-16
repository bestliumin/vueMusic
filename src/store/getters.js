import state from "./state";
import {playMode} from "../common/js/config";

export const singer = state => state.singer;

export const playing = state => state.playing;

export const fullScreen = state => state.fullScreen;

export const playList = state => state.playList;

export const sequenceList = state => state.sequenceList;

export const mode = state => state.mode;

export const currentIndex = state => state.currentIndex;

//获取当前播放歌曲,如果没有则设置为空
export const currentSong = (state) => {
    return state.playList[state.currentIndex] || {};
};

export const disc = state => state.disc;

export const rank = state => state.rank;

export const theme = state => state.theme;
