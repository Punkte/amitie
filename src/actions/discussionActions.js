
import conv from '../data/conv'


/**
 * 
 * @param {array} messagesId 
 */
export const getMessages = () => {
    
    return {
        type: 'FETCH_MESSAGES',
        payload : {
            messages : conv
        } 
    }
}

export const getMessageById = messageId => {
    Object.keys(o,)
    return {
        type: 'GET_MESSAGE_BY_ID',
        payload : {
            message 
        }
    }   

}
