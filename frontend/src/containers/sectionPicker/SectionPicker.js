import React, {useContext} from 'react'
import styled from "styled-components";
import { Context } from '../../layout/Context';
import {MainWrapper, InputWrapper, AccountWrapper, AccountButton, Input, Heading, Wrapper} from "./styles"

const Button = styled.button `
    height: 30px;
    width: 20%;
    border: 1px solid ${props => props.theme.color.primary};
    border-radius: 1px;
    background-color: ${props => props.theme.color.bttn};
    color: #FFF;
    font-weight: 600;
    :focus {
        background-color: #000000
    };
    :hover {
        background-color: #000000
    }   
`

const SectionPicker = () => {
    const buttons = ["Products", "Categories", "Data", "Customers", "MKT kanály"]

    const {setState} = useContext(Context)

    const setStateValue = (e) => {
        setState(e.target.innerText)
    }
    
    return (
        <>
            <MainWrapper>
                <Wrapper>
                    <InputWrapper>
                        <Heading> Choose Month </Heading>
                        <Input type="month" name="monthPicker" min="2021-07" defaultValue="2021-07"></Input>
                    </InputWrapper>
                    <AccountWrapper>
                        <p> Karel Geyer </p>
                        <AccountButton>
                            Account Setting
                        </AccountButton>
                    </AccountWrapper>
                </Wrapper>
                <Wrapper>
                    {buttons.map(res => 
                        <Button onClick={setStateValue} key={res}> {res} </Button>
                        )}
                </Wrapper>
            </MainWrapper>
        </>
    )
}

export default SectionPicker
