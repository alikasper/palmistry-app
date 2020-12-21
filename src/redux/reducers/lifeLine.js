import { UPDATE_LIFELINE } from '../actionTypes';

const initialState = {
    option: '', 
    description: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_LIFELINE: {
            return {
                option: action.payload.option,
                description: action.payload.description
            }
        }
        default:
            return state;
    }
}