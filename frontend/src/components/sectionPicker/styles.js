import styled from 'styled-components';

export const Section = styled.div`
  	width: 100%;
  	display: flex;
  	justify-content: space-evenly;
  	flex-direction: column;
  	align-items: center;
  	padding: 10px 5px;

    > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
    }
`
export const Wrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-evenly;

    > h2 {
        font-size: ${props => props.theme.fontSize.h2};
        font-weight: ${props => props.theme.fontWeigth.h2};
    }

    > input {
        height: 40px;
        padding: 10px;
        border:  ${props => props.theme.border.line};
        border-radius: 5px;
    }
`
export const LinkText = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${props => props.theme.color.white};
`
export const Button = styled.button`
    height: 30px;
    min-width: 150px;
    width: 20%;
    border: 1px solid ${props => props.theme.color.primary};
    border-radius: 1px;
    background-color: ${props => props.theme.color.bttn};
    color: ${props => props.theme.color.white};
    font-weight: 600;

    :focus {
        background-color: #000000
    };

    :hover {
        background-color: #000000
    }
`
