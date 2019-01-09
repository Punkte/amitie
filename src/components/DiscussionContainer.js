import React, { Component, Fragment } from 'react'
import Discussion from './Discussion'
import Choice from './Choice'
import { connect } from 'react-redux'
import { getMessageById, fetchMessage } from '../actions/discussionActions'

class DiscussionContainer extends Component {

    constructor( props ) {
        super( props )
        this.messages = this.props.messages
        window.that = this
    }
    componentDidMount() {
        this.props.fetchMessage()
    }
    

    render() {
       return(
        <Fragment>
            <Discussion 
                {...this.props}
            />
            <Choice />
        </Fragment>
       )
    }

}

const mapStateToProps = state => ({
    messages: state.messages
})

const mapDispatchToProps = dispatch => ({
    getMessageById: id => dispatch( getMessageById( id ) ),
    fetchMessage: _ => dispatch( fetchMessage() )
})


export default connect( mapStateToProps, mapDispatchToProps )(DiscussionContainer)