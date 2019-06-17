const initState = {
    tours: [
    ]
}

const rootReducer =  (state = initState, action) => {
    switch(action.type){
        case "SET_TOURS":
            console.log('Setting tours')
            return {
                ...state,
                tours: action.payload
            }
        default:
            return state
    }
}

export default rootReducer