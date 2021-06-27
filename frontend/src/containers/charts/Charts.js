import React,{ useContext } from 'react'
import {MainSection} from "./styles"
import Products from './components/products/Products'
import Categories from './components/categories/Categories'
import Customers from './components/customers/Customers'
import { Context } from '../../layout/Context'
import Channels from './components/channels/Channels'

const Charts = () => {
    const {state} = useContext(Context)

    return (
        <>
            <MainSection>
                {state === "Products" ? <Products /> : null}
                {state === "Categories" ? <Categories /> : null}
                {state === "Customers" ? <Customers /> : null}
                {state === "MKT kanály" ? <Channels />: null}
            </MainSection>
        </>
    )
}

export default Charts
