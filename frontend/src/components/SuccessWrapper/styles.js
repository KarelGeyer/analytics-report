import styled from "styled-components";

export const Wrapper = styled.div`
    width: 200px;

    > button {
        width: 100%;
        padding: 15px;
        border: none;
        background-color: ${props => props.theme.color.successBttn};
        color: inherit;
        font-weight: ${props => props.theme.fontWeigth.button};
        transition: all 2s;
    }
`