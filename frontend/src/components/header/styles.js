import styled from "styled-components";

export const HeaderSection = styled.section`
    height: ${props => props.theme.height.headerHeight};
    background-color: ${props => props.theme.color.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const InnerSection = styled.div`
    height: 65%;
    width: 100%;
    background-color: ${props => props.theme.color.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const InnerContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: ${props => props.theme.width.maxWidth};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const Logo = styled.img`
    max-height: 100%;
    max-width: 100%;
`
export const Heading = styled.h1`
    color: ${props => props.theme.color.white};
    font-size: ${props => props.theme.fontSize.h1};
`