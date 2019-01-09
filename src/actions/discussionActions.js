
import conv from '../data/conv'


export const fetchMessage = _ => {
    const messages = conv
    return {
        type: 'FETCH_MESSAGE',
        payload : {
            messages
        }
    }

}
export const getMessageById = messageId => {
    const message = conv.find( el => el.id === messageId )
    if( message ) {
        return {
            type: 'GET_MESSAGE_BY_ID',
            payload : {
                message 
            }
        }
    }

}

export const sendMessage = e => {
    e.preventDefault()
    let message = conv.find( el => el.id === parseInt(e.target.getAttribute("data-next") ))
    if( !message ) { 
        console.warn('message not found in conv.js')
        return {
            type: 'SEND_MESSAGE',
            payload : {
                message 
            }
        }  
    }
    let userAnswer = { content : e.target.value, type: 'answer' }
    this.setState(prevState => {
        let mess = [ ...prevState.messages, userAnswer, message ] // view
        let nextAnswerId = message.id // getting the next answer id
        if( !this.answers[nextAnswerId] ) {
            return this.state
        }
        return { 
            messages: mess,
            answers:[
                ...this.answers[nextAnswerId] // replacing actual answers by news 
            ],
            answerId: nextAnswerId 
        }
    }, () => console.log( this.state.answers ) )
}