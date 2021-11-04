import styled from 'styled-components';

export const Section = styled.section`
    height: 500px;
    width: 100%;
`
export const Form = styled.form`
    display: flex;
    height: 220px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 100px;

    > div {
        max-height: 100%;
        width: 350px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;

        > input {
            border: 1px solid lightgrey;
            margin-left: 30px;
            padding: 3px;
        }

        > a {
            width: 100%;

            > button {
                border-width: 1px;
                width: 100%;
            }
        }
        
        > button {
            border-width: 1px;
            width: 100%;
        }
    }
`
export const LocationReloadSection = styled.section`
    padding-top: 40px;
    width: 600px;
    height: 500px
`