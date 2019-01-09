import React, { Component } from 'react'
import styled from 'styled-components'


const Bubble = styled.div`
    border: none;
    border-radius: 50px;
    opacity: ${ props => props.type ? "0" : "0" };

    background-color: ${ props => props.type ? "#75cac3" : "#f3f9fb" };
    display: block;
    padding: 10px;
    margin: 5px;
    max-width: 45vw;
    align-self: ${ props => props.type && "flex-end" };

    transform: translateY(50%);
    color: ${ props => props.type ? "#fff" : "#000" };
    outline: none;

`

const BubbleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 90vh;

    overflow: scroll;
`


class Discussion extends Component {
    constructor( props ) {
        super( props )
    }
    
    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props)
        window.props = this.props
    }

    render() {
        return(
            <div>
                {/* { this.props.messages.messages && (
                    <BubbleContainer>
                        { this.props.messages.map(message => (
                            <Bubble 
                                key={message.id}
                            >
                                { message.content }
                            </Bubble>
                        )) }
                    </BubbleContainer>
                ) } */}
            </div>
        )
    }
}



export default Discussion