import React from 'react';
import intention_figure_1 from '../../../img/intention_1.jpg';
import intention_figure_2 from '../../../img/intention_2.jpg';
import intention_figure_3 from '../../../img/intention_3.jpg';
import {Link} from "react-router-dom";


const Intention = () => {
    return(
        <section className="intention">
            <div className="container">
                <h2 className="section-title text-center">Intencje</h2>
                <div className="intention__wrapper">
                    <div className="intention__single">
                        <figure className="intention__image">
                            <img src={intention_figure_1} alt="intencja 1"/>
                        </figure>
                        <div className="intention__content">
                            <div className="intention__date">
                                <p className="intention__day">18</p>
                                <p className="intention__month">Maj</p>
                                <p className="intention__year">2019</p>
                            </div>
                            <div className="intention__texts">
                                <p className="intention__heading">
                                    All you want to know about Bible
                                </p>
                                <p className="intention__content">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="intention__single">
                        <figure className="intention__image">
                            <img src={intention_figure_2} alt="intencja 2"/>
                        </figure>
                        <div className="intention__content">
                            <div className="intention__date">
                                <p className="intention__day">18</p>
                                <p className="intention__month">Maj</p>
                                <p className="intention__year">2019</p>
                            </div>
                            <div className="intention__texts">
                                <p className="intention__heading">
                                    All you want to know about Bible
                                </p>
                                <p className="intention__content">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="intention__single">
                        <figure className="intention__image">
                            <img src={intention_figure_3} alt="intencja 3"/>
                        </figure>
                        <div className="intention__content">
                            <div className="intention__date">
                                <p className="intention__day">18</p>
                                <p className="intention__month">Maj</p>
                                <p className="intention__year">2019</p>
                            </div>
                            <div className="intention__texts">
                                <p className="intention__heading">
                                    All you want to know about Bible
                                </p>
                                <p className="intention__content">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intention__link text-center">
                    <Link className="btn btn--welcome" to="/intentions">więcej</Link>
                </div>
            </div>
        </section>
    )
};

export default Intention;