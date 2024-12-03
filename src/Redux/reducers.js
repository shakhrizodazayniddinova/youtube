import { ADD_COMMENT, SELECT_CHANNEL, selectChannel, SET_VIDEOS, TOGGLE_ASIDE_VISIBILITY, UNSUBSCRIBE_CHANNEL } from "./actions";

// Initial state for aside visibility
const initialAsideState = {
    isVisible: true,
};

// Reducer for toggling aside visibility
export const asideReducer = (state = initialAsideState, action) => {
    switch (action.type){
        case TOGGLE_ASIDE_VISIBILITY:
            return{...state, isVisible: !state.isVisible};

        default: return state;
    };
}; 


// Initial state for videos
const initialVideosState = {
    videos: [],
    loading: true,
};

export const videosReducer = (state = initialVideosState, action) => {
    switch (action.type) {
        case SET_VIDEOS:
            return{ ...state, videos: action.payload, loading: false };

        default: return state;
    };
};

const initialChannelState = {
    selectedChannel: {},
};

export const channelReducer = (state = initialChannelState, action) => {
    switch (action.type) {
        case SELECT_CHANNEL:
            return{ ...state, selectedChannel: action.payload };

        default: return state;
    };
};

const initialCommentState = {
    comments: [],
};

export const commentReducer = (state = initialCommentState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return{ 
                ...state,
                comments: [...state.comments, action.payload ],
            }
        
        default: return state;
    }
}