import {
    LOAD_USERS_LOADING,
    LOAD_USERS_SUCCESS,
    LOAD_USERS_ERROR
} from "../Constants/Constant";

const initialState = {
    data: [],
    loading: false,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS_LOADING: {
            return {
                ...state,
                loading: true,
            };
        }
        case LOAD_USERS_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_USERS_ERROR: {
            return {
                ...state,
                error: action.error,
                loading: false
            };
        }
        default: {
            return state;
        }
    }
}

export default userReducer;
