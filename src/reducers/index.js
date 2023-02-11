import CONSTANTS from "../constants";
const {ACTIONS} = CONSTANTS;

export function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.INPUT_CHANGE: {
            return {
                ...state,
                [action.name]: action.value
            }
        }
        default: return state;
    }
}