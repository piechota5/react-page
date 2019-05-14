import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route , Link , BrowserRouter as Router} from 'react-router-dom';

import './index.scss';

import App from './App';
import About from './Components/pages/About';
import Ads from './Components/pages/Ads';
import Contact from './Components/pages/Contact';
import Gallery from './Components/pages/Gallery';
import Intentions from './Components/pages/Intentions';
import Notfound from './Components/pages/Notfound';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about-us">About</Link>
                </li>
                <li>
                    <Link to="/ads">Ads</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/intentions">Intentions</Link>
                </li>
            </ul>
            <Route exact path="/" component={App}  />
            <Route path="/about-us" component={About} />
            <Route path="/ads" component={Ads} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/intentions" component={Intentions} />
            <Route component={Notfound} />
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
