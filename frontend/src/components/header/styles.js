import styled from "styled-components";

export const Section = styled.section`
    height: ${props => props.theme.height.headerHeight};
    background-color: ${props => props.theme.color.primary};
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        height: 65%;
        width: 100%;
        background-color: ${props => props.theme.color.secondary};
        display: flex;
        justify-content: center;
        align-items: center;
    } 
`
export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: ${props => props.theme.width.maxWidth};
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > img {
        max-height: 100%;
        max-width: 100%;
    }

    > h1 {
        color: ${props => props.theme.color.white};
        font-size: ${props => props.theme.fontSize.h1};
    }
`
export const Button = styled.button`
    min-height: 30px;
    min-width: 80px;
    text-align: center;
    border-radius: 5px;
`