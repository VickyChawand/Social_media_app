import { SET_CURRENT_PAGE } from "./action-types";


// Action creators
export const setCurrentPage = (page = '/signup') => ({
        type: SET_CURRENT_PAGE,
        payload: page,
});

