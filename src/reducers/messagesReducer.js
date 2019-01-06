import conv from '../data/conv'
const initialState = {}

const messagesReducer = ( state = initialState, action ) => {
    
    switch( action.type ) {

        case 'FETCH_MESSAGE':
            return {
                ...conv
            }

        case "FETCH_CONV" : 
            return;
        case "ADD_MESSAGE" : 
            const newMessage = action.payload.newMessage
            return {
                ...state,
                newMessage
            }
        default : 
            return state
    }

}

export default messagesReducer