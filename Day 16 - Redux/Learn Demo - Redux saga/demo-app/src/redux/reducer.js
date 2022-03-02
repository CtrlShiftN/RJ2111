import { LOGIN, FETCH_USER, FETCH_USER_SUCCESS, LOGIN_SUCCESS } from "./contants";

const initialState = {
    users: [],
    userlogined: {}
};
const rootReducer = (state = initialState, action) => {
    // Handle các actions gửi lên
    switch (action.type) {
        case LOGIN:
            return { ...state, userlogined: action.payload }
        case LOGIN_SUCCESS:
            return { ...state, userlogined: action.payload }
        case FETCH_USER:
            return { ...state, users: action.payload };
        case FETCH_USER_SUCCESS:
            return { ...state, users: action.payload };
    }
    return state;
}
export default rootReducer;