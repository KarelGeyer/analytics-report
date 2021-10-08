import React from 'react'
import ProductsByValue from "./components/productsByValue/ProductsByValue"
import ProductsByQuantity from "./components/productsByQuantity/ProductsByQuantity"
import CategoriesByQuantity from "./components/categoriesByQuantity/CategoriesByQuantity"
import CategoriesByValue from "./components/categoriesByValue/CategoriesByValue"
import DataComparison from "./components/dataComparison/DataComparison"
import CustomersData from "./components/customersData/CustomersData"
import {MainWrapper, Form} from "./styles"
import { Switch, Route } from 'react-router';

const AddData = () => {

    const submit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <MainWrapper>
                <Form onSubmit={(e) => submit(e)}>
                    <Switch>
                        <Route path="/addData/ProductsByValue" exact component={ProductsByValue} />
                        <Route path="/addData/ProductsByQuantity" exact component={ProductsByQuantity} />
                        <Route path="/addData/CategoriesByValue" exact component={CategoriesByValue} />
                        <Route path="/addData/CategoriesByQuantity" exact component={CategoriesByQuantity} />
                        <Route path="/addData/DataComparison" exact component={DataComparison} />
                        <Route path="/addData/CustomersData" exact component={CustomersData} />
                    </Switch>
                </Form>
            </MainWrapper>
        </>
    )
}

export default AddData
