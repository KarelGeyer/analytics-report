import React, {useContext} from 'react'
import { Context } from '../../../../layout/Context'
import { Link } from 'react-router-dom';
import {InputWrapper, Input, Label, NextButton} from "./styles"

const CustomersData = () => {

    const {formData} = useContext(Context)
    const {customersData} = formData

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
