import React, { Component, Fragment } from 'react'
import Discussion from './Discussion'
import Choice from './Choice'

class DiscussionContainer extends Component {

    constructor( props ) {
        super( props )
    }
    

    render() {
       return(
        <Fragment>
            <Discussion />
            <Choice />
        </Fragment>
       )
    }

}

export default DiscussionContainer