import {ADD_MONTH} from '../actions/types';

export default (state=[], action) => {
    switch (action.type) {
        case ADD_MONTH:
            const id = (new Date).getTime();
            return [...state, {id, date: action.date}]
        default:
            return state;
    }
}