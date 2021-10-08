import styled from "styled-components";

export const MainWrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`
export const GraphWrapper = styled.div `
    width: 100%;
    padding: 25px 40px 20px 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const BarWrapper = styled.div `
    width: 500px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Heading = styled.h2 `
    font-size: ${props => props.theme.fontSize.h2};
    font-weight: ${props => props.theme.fontWeigth.h2}
`
