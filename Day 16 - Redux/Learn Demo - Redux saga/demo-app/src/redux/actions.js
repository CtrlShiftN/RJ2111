import { LOGIN } from "./contants";

export default function loginRedux(user) {
    return {
        type: LOGIN,
        payload: user
    }
}