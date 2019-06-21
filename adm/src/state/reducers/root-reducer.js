const initState = {
    auth: {
        isAuthenticated: false
    }
}

const rootReducer = (state = initState, action) =>{
    switch(action.type){

        case "SET_AUTH":
            return {
                ...state,
                auth: {
                    isAuthenticated: action.payload
                }
            }

        default:
            return state;
    }
} 

export default rootReducer