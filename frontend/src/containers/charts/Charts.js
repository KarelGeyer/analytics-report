import React, {useState, useEffect} from 'react'
import {MainSection} from "./styles"
import Products from './components/products/Products'
import Categories from './components/categories/Categories'
import Customers from './components/customers/Customers'
import { Switch, Route } from 'react-router';
import Channels from './components/channels/Channels'
import Data from "./components/data/Data";

import queryString from 'query-string';

const Charts = ({ location }) => {
    const { code } = queryString.parse(location.search);
    const [data, setData] = useState("none");

    // useEffect(() => {
    //     fetch( `http://localhost:3027/permisions?code${code}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application-json',
    //             Accept: 'application-json',
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(res => setData(JSON.stringify(res)))
    // });

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
