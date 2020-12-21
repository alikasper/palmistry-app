import { UPDATE_LIFELINE } from './actionTypes';
import { UPDATE_HEARTLINE } from './actionTypes';
import { UPDATE_HEADLINE } from './actionTypes';
import { UPDATE_FATELINE } from './actionTypes';

export const updateLine = data => {
    return {
        type: data.type,
        payload: {
            option: data.option,
            description: data.description
        }
    } 
}