import React, { Component, Fragment } from 'react'
import conv from '../data/conv'
import answers from '../data/answers'
import Discussion from './Discussion'
import Choice from './Choice'

class DiscussionContainer extends Component {

    constructor(props) {
        super(props)
        this.conv = conv
        this.answers = answers
        this.initialAnswerId = 0
        this.state = {
            messages: [
                conv[0]
            ],
            answers:[
                ...this.answers[ this.initialAnswerId ]
            ],
            answerId: this.initialAnswerId 
        }
        console.log(this.state)
    }
    
    sendMessage = e => {
        e.preventDefault()
        let message = this.conv.find(el => el.id === parseInt(e.target.getAttribute("data-next")))
        if( !message ) { 
            console.warn('message not found in conv.js')
            return false 
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

    render() {
       return(
        <Fragment>
            <Discussion 
                messages={ this.state.messages }
                />
            <Choice
                answers={ this.state.answers }
                sendMessage={ this.sendMessage }
                disabled={ this.choicesDisabled }
                />
        </Fragment>
       )
    }

}

export default DiscussionContainer