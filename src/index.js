import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import asyncComponent from './AsyncComponent';

const AsyncHeader = asyncComponent(() => import('./components/header/BootstrapHeader').then(module => module.default));
const AsyncLanding = asyncComponent(() => import('./components/landing/landing').then(module => module.default));
const AsyncProjects = asyncComponent(() => import('./components/projects/projects').then(module => module.default));

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route component={AsyncHeader} />
            <Switch>
                <Route exact path="/" component={AsyncLanding} />
                <Route exact path="/projects" component={AsyncProjects} />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
