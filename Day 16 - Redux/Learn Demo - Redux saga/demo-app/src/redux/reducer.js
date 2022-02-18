import { LOGIN } from "./contants";

const initialState = {
    users: [],
    userlogined: {}
};
const rootReducer = (state = initialState, action) => {
    // Handle các actions gửi lên
    switch (action.type) {
        case LOGIN:
            return { ...state, userlogined: action.payload }
        case FETCH_USER:
            return { ...state, users: action.payload };
    }
    return state;
}
export default rootReducer;