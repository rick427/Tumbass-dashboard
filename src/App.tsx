import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/home';

const App:React.FC = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </Fragment>
    )
}

export default App;
