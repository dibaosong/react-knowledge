export default function user(state = null, action){
    switch (action.type) {
        case 'USER_MENU':
            return {
                "menu": action.data
            }
        case 'USER_INFO':
            return {
                "data": action.data
            }
        default:
            return state
    }
}