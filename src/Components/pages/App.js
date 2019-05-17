import React, {Component, Fragment} from 'react';
import Counter from '../sections/homepage/Counter'
import Welcome from "../sections/homepage/Welcome";
import Ad from "../sections/homepage/Ad";
import Intention from "../sections/homepage/Intention";

class App extends Component {
  render() {
      return(
          <Fragment>
              <header className="header">
                  <span className="header__overlay"></span>
                  <div className="container">
                      <div className="header__content">
                          <h1 className="main-title">
                              Parafia Matki Bożej Różańcowej
                          </h1>
                          <p className="header__subtitle">
                              w Charsznicy
                          </p>
                      </div>
                  </div>
              </header>
              <Counter />
              <Welcome/>
              <Ad/>
              <Intention />
          </Fragment>
      )
  }
}

export default App;

