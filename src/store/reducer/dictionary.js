export default function dictionary(state = {
    "sexType": [
        {
            "value": 0,
            "name": "男"
        },
        {
            "value": 1,
            "name": "女"
        }
    ]
}, action){
    switch (action.type) {
        case 'DICTIONARY':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}