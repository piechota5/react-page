import React from 'react';
import sermon_1 from '../../../img/sermon_1.jpg';
import sermon_2 from '../../../img/sermon_2.jpg';
import sermon_3 from '../../../img/sermon_3.jpg';
import sermon_4 from '../../../img/sermon_4.jpg';
import  {FaCalendarAlt} from 'react-icons/fa';

const Sermon = () => {
    return(
        <section className="sermon">
            <div className="container">
                <h2 className="section-title sermon__title">
                    Porządek Mszy Świętych
                </h2>
                <div className="sermon__wrapper">
                    <div className="sermon__left">
                        <div className="sermon__inner">
                            <figure className="sermon__image">
                                <img src={sermon_1} alt="sermon_1"/>
                            </figure>
                            <div className="sermon__texts">
                                <h3 className="sermon__header">
                                    Msze Święte w niedziele i święta
                                </h3>
                                <p className="sermon__date">
                                    <FaCalendarAlt />
                                    8:00 | 10:30 | 16:00
                                </p>
                            </div>
                        </div>
                        <div className="sermon__inner">
                            <figure className="sermon__image">
                                <img src={sermon_2} alt="sermon_2"/>
                            </figure>
                            <div className="sermon__texts">
                                <h3 className="sermon__header">
                                    Msze Święte w dni powszednie
                                </h3>
                                <p className="sermon__date">
                                    <FaCalendarAlt />
                                    poniedziałek i wtorek - 7:00
                                </p>
                                <p className="sermon__date">
                                    <FaCalendarAlt />
                                    środa - sobota - 17:00
                                </p>
                            </div>
                        </div>
                        <div className="sermon__inner">
                            <figure className="sermon__image">
                                <img src={sermon_3} alt="sermon_3"/>
                            </figure>
                            <div className="sermon__texts">
                                <h3 className="sermon__header">
                                    Nabożeństwa
                                </h3>
                                <p className="sermon__date">
                                    <FaCalendarAlt />
                                    środa - 17:30
                                </p>
                                <p className="sermon__subtitle">
                                    Nowenna do Matki Bożej Nieustającej Pomocy.
                                </p>
                                <p className="sermon__date">
                                    <FaCalendarAlt />
                                    niedziela - 15:50
                                </p>
                                <p className="sermon__subtitle">
                                    Koronka do Bożego Miłosierdzia
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sermon__right">
                        <h3 className="sermon__right__title">
                            Pierwsze dni miesiąca
                        </h3>
                        <figure className="sermon__right__image">
                            <img src={sermon_4} alt="sermon 4"/>
                        </figure>
                        <div className="sermon__right__content">
                            <div className="sermon__right__single">
                                <h4 className="sermon__right__header">
                                    <FaCalendarAlt />
                                    Pierwszy czwartek
                                </h4>
                                <p className="sermon__right__date">
                                    16:00 - Godzinna święta którą rozpoczynamy Koronką do Bożego Miłosierdzia.
                                </p>
                            </div>
                            <div className="sermon__right__single">
                                <h4 className="sermon__right__header">
                                    <FaCalendarAlt />
                                    Pierwszy piątek
                                </h4>
                                <p className="sermon__right__date">
                                    17:00 - Msza Święta  o Najświętszym Sercu Pana Jezusa.
                                </p>
                                <p className="sermon__right__date">
                                    17:30 - Adoracja Najświętszego Sakramentu i modlitwy do św. Ojca Pio.
                                </p>
                                <p className="sermon__right__date">
                                    16:30 - 17:00 - Spowiedź
                                </p>
                            </div>
                            <div className="sermon__right__single">
                                <h4 className="sermon__right__header">
                                    <FaCalendarAlt />
                                    Pierwsza sobota
                                </h4>
                                <p className="sermon__right__date">
                                    17:00 - Msza Święta o Niepokalanym Sercu NMP.
                                </p>
                                <p className="sermon__right__date">
                                    17:30 - Różaniec i medytacja z wystawionym Najświętszym Sakramencie.
                                </p>
                            </div>
                            <div className="sermon__right__single">
                                <h4 className="sermon__right__header">
                                    <FaCalendarAlt />
                                    Pierwsza niedziela
                                </h4>
                                <p className="sermon__right__date">
                                    10:00 - Różaniec za zmarłych wspominanych w wypominkach.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Sermon;