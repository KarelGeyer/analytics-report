import styled from "styled-components"

export const InputWrapper = styled.div `
    width: 60%;
    height: 50px;
    display: flex;
    justify-content: space-between;
`
export const Label = styled.label `
   font-weight: 900;
   font-size: 1.1rem;
`
export const Input = styled.input `
    width: 45%;
    height: 30px;
    padding: 0 0 0 5px;
`
export const NextButton = styled.button `
    width: 250px;
    border: none;
    border-radius: 10px;
    background-color: ${props => props.theme.color.secondary};
    color: white;
    font-weight: 800;
    padding: 5px
`