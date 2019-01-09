import conv from '../data/conv'
const initialState = {}

const messagesReducer = ( state = initialState, action ) => {
    
    switch( action.type ) {

        case 'FETCH_MESSAGE':
        const messages = action.payload.messages
            return {
                ...state,
                messages
            }
        case "ADD_MESSAGE" : 
            const newMessage = action.payload.newMessage
            return {
                ...state,
                newMessage
            }
        case 'GET_MESSAGE_BY_ID' : {
            const message = action.payload.message ? action.payload.message : {}
            return {
                ...state
            }
        }
        default : 
            return state
    }

}

export default messagesReducer