import styled from "styled-components";

export const HeaderSection = styled.section `
    height: 190px;
    width: 100%;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InnerSection = styled.div `
    height: 65%;
    width: 100%;
    background-color: #555555;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InnerContainer = styled.div `
    height: 100%;
    width: 90%;
    max-width: 1080px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid white
`
export const Logo = styled.img `
    max-height: 100%;
    max-width: 100%;
`
export const Heading = styled.h1 `
    color: #FFFFFF;
    font-size: ${props => props.theme.fontSize.h1}
`