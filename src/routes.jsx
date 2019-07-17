import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import SamplePage from './modules/Sample/containers/SamplePage';


const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/sample" component={SamplePage} />
        </Switch>
    </App> );

export default Routes