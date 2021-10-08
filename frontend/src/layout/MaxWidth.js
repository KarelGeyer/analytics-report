import React from 'react'
import { MaxWidthSection ,MaxWidthWrapper } from "./styles"

const MaxWidth = ({children}) => {
    return (
        <>
            <MaxWidthSection>
                <MaxWidthWrapper>
                    {children}
                </MaxWidthWrapper>
            </MaxWidthSection>
        </>
    )
}

export default MaxWidth
