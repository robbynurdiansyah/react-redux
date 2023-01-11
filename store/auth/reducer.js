import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    user: []
};

function reducer(state = initState, action) {
    // console.log(action.data);
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true, user: action.data },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false },
            };
        default:
            return state;
    }
}

export default reducer;
