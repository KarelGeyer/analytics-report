import React, {useState, useContext} from 'react'
import { Context } from '../../../../layout/Context'
import { Link } from 'react-router-dom';
import {InputWrapper, Input, NextButton} from "./styles"

const ProductsByValue = () => {
    const dummy = [0,1,2,3,4,5,6,7,8,9,10]
    const {formData, setFormData} = useContext(Context)

    const saveProductNames = (e, res) => {
        formData.productsByValue.names.splice(res, 1, e.target.value)
    }

    const saveProductValues = (e, res) => {
        formData.productsByValue.values.splice(res, 1, e.target.value)
    }
    return (
        <>
            <h2> Producty podle tržeb </h2>
            {dummy.map((res, i) => 
                <InputWrapper key={res}>
                    <Input 
                        required 
                        type="text" 
                        placeholder="add product name" 
                        onChange={e => {saveProductNames(e, res)}}/>
                    <Input 
                        required 
                        type="text"
                        placeholder="add the value" 
                        pattern="[0-9]"
                        onClick={e => {
                            saveProductValues(e, res)
                    }}/>
                </InputWrapper>
            )} 
            <Link to="/addData/ProductsByQuantity">
                <NextButton> NEXT </NextButton>            
            </Link>
        </>
    )
}

export default ProductsByValue
