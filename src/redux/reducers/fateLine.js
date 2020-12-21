import { UPDATE_FATELINE } from '../actionTypes';

const initialState = {
    option: '',
    description: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_FATELINE: {
            return {
                option: action.payload.option,
                description: action.payload.description
            }
        }
        default:
            return state;
    }
}