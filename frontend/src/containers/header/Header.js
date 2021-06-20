import React from 'react'
import styled from "styled-components"
import logo from "./assets/logo.png"
import { HeaderSection, InnerSection, InnerContainer, Logo, Heading } from "./styles"

const Header = () => {
    return (
        <>
            <HeaderSection>
                <InnerSection>
                    <InnerContainer>
                        <Logo src={logo} alt="logo" />
                        <Heading> Marketing Data </Heading>
                    </InnerContainer>
                </InnerSection>
            </HeaderSection>
        </>
    )
}

export default Header
