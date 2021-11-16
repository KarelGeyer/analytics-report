import React, { useState } from 'react';
import { Context } from './helpers/context/Context';
import { Switch, Route } from 'react-router';

import WithMaxWidth from './hoc/withMaxWidth/withMaxWidth';

import Charts from './pages/charts/Charts';
import LoginForm from './pages/loginForm/LoginForm';
import LoginError from './pages/loginForm/LoginError';
import MainPage from './pages/mainPage/MainPage';
import Account from './pages/account/Account';
import Events from './pages/events/Events';
import Event from './pages/events/event/Event';
import Admin from './pages/admin/Admin';

const Layout = () => {
  const [state, setState] = useState('Products');
  const [chartsData, setChartsData] = useState('');
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const thisDate = new Date();
    const thisMonth = thisDate.getMonth();
    const months = [
      'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen',
      'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'
    ];

    return months[thisMonth];
  });

  return (
    <>
        <Switch>
          <Route path='/login' render={(props) => (<LoginForm setUser={setUser} />)} />
          {user === null ?
            <LoginError /> :
            <Context.Provider value={{
              state, setState,
              chartsData, setChartsData,
              selectedMonth, setSelectedMonth
            }}>
              <Route path='/' exact component={MainPage} />
              <Route path='/account' component={Account} />
              <Route path='/admin' component={Admin} />
              <Route path='/charts' component={Charts} />
              <Route path='/events' exact component={Events} />
              <Route path='/events/:id' component={Event} />
            </Context.Provider>
          }
        </Switch>
    </>
  )
};

export default WithMaxWidth(Layout);
