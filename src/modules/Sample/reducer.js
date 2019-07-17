import ActionTypes from './ActionTypes';

const initialState = {
    messages: []
};

const SampleReducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case ActionTypes.SHOW_ALERT:
            return {
                ...state,
                messages: state.messages.concat(payload.message)
            };
        case ActionTypes.CLOSE_ALERT:
            return {};
        default:
            return state;
    }

};

export default SampleReducer;