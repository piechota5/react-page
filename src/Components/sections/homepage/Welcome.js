import React, {Component} from 'react';
import chapel from '../../../img/kaplica.jpg';
import { Link } from 'react-router-dom';


class Welcome extends Component{
    render() {
        return(
            <section className="welcome">
                <div className="container">
                    <h2 className="section-title text-center">O Parafii</h2>
                    <p className="section-subtitle welcome__subtitle text-center">
                        Autorem historii i wstępu do kroniki parafii jest Ks. Józef Pluta. Był on jednym z tych, którzy doświadczyli szczodrości i szlachetności Antoniego Malatyńskiego.<br/>  Zapis rozpoczyna zarys historii osady.
                    </p>
                    <div className="welcome__wrapper">
                        <div className="col-xs-12 col-md-6">
                            <h3 className="welcome__title">
                                Historia i wstęp
                            </h3>
                            <p className="welcome__description">
                                „Na początku XIX wieku, było tu tylko pole. Wieś o nazwie Charsznica była położona dwa kilometry na zachód, była dużą wsią położoną w błotnistej wówczas kotlinie.
                                Z czasem gospodarstwa wsi, szczególnie na skutek komasacji, zostały przeniesione na pola okolicz­ne. Ziemia ta, gdzie mieści się osiedle Charsznica, należała do dworu, który był własnością dziedzica A. Bojarskiego..."
                                „W pierwszych latach swego istnienia stacja leżała wśród gołych pól obok pól folwarku Chodów i folwarku Ciszówka." [...]
                            </p>
                            <div className="welcome__anchor">
                                {/*<Router>*/}
                                    <Link className="btn btn--welcome" to="/about-us">czytaj więcej</Link>
                                {/*</Router>*/}
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="welcome__image">
                                <img src={chapel} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

};

export default Welcome;