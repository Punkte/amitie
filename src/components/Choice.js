import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
`

const Button = styled.button`
    border: solid #eee 1px;

    display: inline-block;
    padding: 5px;
    height: 10vh;

    color: #000;
    outline: none;
    flex: 1;

    &:active {
        background-color: #75cac3;
        color: #FFF;
    }
`
const Choice = props => {
    return(
        <ButtonContainer>
            { props.answers && props.answers.map((answer, index) => (
                <Button 
                    key={ index }
                    onClick={ props.sendMessage } 
                    data-next={ answer.next }
                    value={ answer.content }
                    >
                    { answer.choice }
                </Button>
            )) }
        </ButtonContainer>
    )
}

export default Choice