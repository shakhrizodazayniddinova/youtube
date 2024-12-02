import { combineReducers } from "redux";
import { asideReducer, channelReducer, commentReducer, videosReducer } from "./reducers";

export const rootReducer = combineReducers({
    aside: asideReducer,
    videos: videosReducer,
    channel: channelReducer,
    comment: commentReducer,
})