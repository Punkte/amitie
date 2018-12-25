import React, { Component } from 'react'
import styled from 'styled-components'
import { TweenLite } from 'gsap'

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
    constructor(props) {
        super(props)
        this.el = []
        this.container = null
        this.tweenAnimation = null
    }
    
    componentDidMount() {
        this.tweenAnimation = TweenLite.to( this.el, 0.3, {x: 0, y: 0, opacity: 1}).delay(1.5)
    }
    componentDidUpdate() {
        this.el.forEach(div => {
            if( div.hasAttribute('type') ) {
                this.tweenAnimation = TweenLite.to( div, 0.2, {x: 0, y: 0, opacity: 1 })
            }else {
                this.tweenAnimation = TweenLite.to( div, 0.2, {x: 0, y: 0, opacity: 1 }).delay(1.8)
            }
            this.container.scrollTop = (this.container.scrollHeight)
            
        })
        this.elements = []
    }

    render() {
        return(
            <div>
                <BubbleContainer
                    ref={ container => this.container = container }
                    >
                    { this.props.messages.map((message, index) => (
                        <Bubble 
                            key={ index } 
                            ref={ el => this.el[index] = el }
                            type={ !message || !message.type ? undefined : message.type }
                            >
                        { message.content }
                        </Bubble>
                    )) }
                </BubbleContainer>
            </div>
        )
    }
}
export default Discussion 