import styled from "styled-components";

export const MainWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    padding: 10px 5px;
`
export const Wrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
`
export const InputWrapper = styled.div `
    width: 60%;
    display: flex;
    justify-content: space-evenly;
`
export const AccountWrapper = styled.div `
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const AccountButton = styled.button `
    height: 30px;
    width: 100%;
    margin: 5px;
    border: 1px solid ${props => props.theme.color.secondary};
    border-radius: 2px;
    background-color: ${props => props.theme.color.secondary};
    color: white
`
export const AddNewData = styled.button `
    height: 40px;
    width: 150px;
    border: 1px solid black;
    border-radius: 5px;
`
export const Heading = styled.h2 `
    font-size: ${props => props.theme.fontSize.h2};
    font-weight: ${props => props.theme.fontWeigth.h2};;
`
export const Input = styled.input `
    height: 40px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
`
export const LinkText = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #ffffff
`
