import React from 'react'
import { Link } from 'react-router-dom';
import {InputWrapper, Input, NextButton} from "./styles"

const CustomersData = () => {

    return (
        <> 
            <h2> Producty podle kusů </h2>
                <InputWrapper>
                    <Input 
                        required 
                        type="text" 
                        placeholder="add values for this year" 
                    /> 
                    <Input 
                        required 
                        type="text"
                        placeholder="add values for this year" 
                        />
                </InputWrapper> 
            <Link to="/addData/CategoriesByValue">
                <NextButton> NEXT </NextButton>            
            </Link>
        </>
    )
}

export default CustomersData
