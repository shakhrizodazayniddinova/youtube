export const SET_VIDEOS = 'SET_VIDEOS';
export const TOGGLE_ASIDE_VISIBILITY = 'TOGGLE_ASIDE_VISIBILITY';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const ADD_COMMENT = 'ADD_COMMENT';

// Actions for toggling aside visibility
export const toggleAsideVisibility = () => ({
    type: TOGGLE_ASIDE_VISIBILITY,
});

// Actions for setting videos
export const setVideos = (videos) => ({
    type: SET_VIDEOS,
    payload: videos,
});

// Actions for setting the selected channel
export const selectChannel = (channel, imgLink) => ({
    type: SELECT_CHANNEL,
    payload: { channel, imgLink },  // Make sure payload is an object, not individual props
});

export const addComment = (value) => ({
    type: ADD_COMMENT,
    payload: value,
})