import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route , Link , BrowserRouter as Router, Switch} from 'react-router-dom';
import { Preloader, Placeholder } from 'react-preloading-screen';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import App from './Components/pages/App';
import About from './Components/pages/About';
import Ads from './Components/pages/Ads';
import Contact from './Components/pages/Contact';
import Gallery from './Components/pages/Gallery';
import Intentions from './Components/pages/Intentions';
import Notfound from './Components/pages/Notfound';

const routing = (
    <main>
        <nav className="nav">
        <Preloader>
            <Router>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link className="nav__anchor" to="/">Strona główna</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__anchor" to="/about-us">O Parafii</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__anchor" to="/ads">Ogłoszenia</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__anchor" to="/intentions">Intencje</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__anchor" to="/gallery">Galeria</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__anchor" to="/contact">Kontakt</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/" component={App}  />
                    <Route path="/about-us" component={About} />
                    <Route path="/ads" component={Ads} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/intentions" component={Intentions} />
                    <Route component={Notfound} />
                </Switch>
            </Router>
            <Placeholder>
                <div id="loader-wrapper">
                    <div id="loader"></div>
                </div>
            </Placeholder>
        </Preloader>
    </nav>
    </main>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
