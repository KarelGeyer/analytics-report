import React from 'react'
import {MainSection} from "./styles"
import Products from './components/products/Products'
import Categories from './components/categories/Categories'
import Customers from './components/customers/Customers'
import { Switch, Route } from 'react-router';
import Channels from './components/channels/Channels'
import Data from "./components/data/Data"

const Charts = () => {

    return (
        <>
            <MainSection>
                <Switch>
                    <Route path="/charts/Products"  component={Products} />
                    <Route path="/charts/Categories" exact component={Categories} />
                    <Route path="/charts/Customers" exact component={Customers} />
                    <Route path="/charts/Channels" exact component={Channels} />
                    <Route path="/charts/Data" exact component={Data} />
                </Switch>
            </MainSection>
        </>
    )
}

export default Charts
