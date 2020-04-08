import { USER_MENU, USER_INFO } from '@/store/actionType';

export default function user(state = null, action){
    switch (action.type) {
        case USER_MENU:
            return {
                ...state,
                "menu": action.data
            }
        case USER_INFO:
            return {
                ...state,
                "info": action.data
            }
        default:
            return state
    }
}