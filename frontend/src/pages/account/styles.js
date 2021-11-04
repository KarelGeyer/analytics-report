import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
`
export const Heading = styled.h1`
    padding: 25px 0;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    width: 35%;
    > input {
        padding: 0 5px;
        border-radius: 5px;
    };
    > button {
        height: 25px;
        width: 130px;
        margin-top: 35px;
    };
    > .delete {
        height: 25px;
        width: 130px;
        margin-top: 35px;
        background-color: ${props => props.theme.color.deleteBttn}
    };
`
