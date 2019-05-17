import React, {Fragment} from 'react';
import icon_1 from '../../../img/ad-1-icon.png';
import icon_2 from '../../../img/ad-2-icon.png';
import icon_3 from '../../../img/ad-3-icon.png';


const Ad = () => {
  return(
      <Fragment>
          <section id="invest" className="offer offer--invest">
              <div className="container">
                  <div className="offer__top-panel">
                      <div className="offer__top-panel__texts">
                          <h2 className="offer__top-panel__title title--large">
                              Nadchodzące
                          </h2>
                          <p className="offer__top-panel__description">
                              „W domu Ojca mego wiele jest mieszkań; gdyby było inaczej, byłbym wam powiedział. Idę przygotować wam miejsce. A jeśli pójdę i przygotuję wam miejsce, przyjdę znowu i wezmę was do siebie, abyście, gdzie Ja jestem, i wy byli.” (Ew. Jana 14;2-3)
                          </p>
                      </div>
                  </div>
                  <div className="offer__wrapper">
                      <div className="offer__inner">
                          <div className="single-offer">
                              <div className="single-offer__top">
                                  <div className="single-offer__content">
                                      <h4 className="single-offer__title title--small">
                                          Wielki Czwartek
                                      </h4>
                                  </div>
                                  <figure className="single-offer__image">
                                      <img src={icon_1} alt="alt" />
                                  </figure>
                              </div>
                              <div className="single-offer__main">
                                  <div className="single-offer__row">
                                      <figure className="single-offer__tick">
                                          {/*<img src="./img/mbank__tick.png" alt="">*/}
                                      </figure>
                                      <p className="single-offer__label">
                                          18:00 Msza św. Wieczerzy Pańskiej.
                                      </p>
                                  </div>
                                  <div className="single-offer__row">
                                      <figure className="single-offer__tick">
                                          {/*<img src="./img/mbank__tick.png" alt="">*/}
                                      </figure>
                                      <p className="single-offer__label">
                                          O godz. 20:30 różaniec za nasze rodzinny.
                                      </p>
                                  </div>
                                  <div className="single-offer__row">
                                      <figure className="single-offer__tick">
                                          {/*<img src="./img/mbank__tick.png" alt="">*/}
                                      </figure>
                                      <p className="single-offer__label">
                                          Adoracja do godz. 21:00.
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="single-offer">
                              <div className="single-offer__top">
                                  <div className="single-offer__content">
                                      <h4 className="single-offer__title title--small">
                                          Wielki Piątek
                                      </h4>
                                  </div>
                                  <figure className="single-offer__image">
                                      <img src={icon_2} alt="alt" />
                                  </figure>
                              </div>
                              <div className="single-offer__main">
                                  <div className="single-offer__row">
                                      <figure className="single-offer__tick">
                                          {/*<img src="./img/mbank__tick.png" alt="">*/}
                                      </figure>
                                      <p className="single-offer__label">
                                          16:30 Droga Krzyżowa.
                                      </p>
                                  </div>
                                  <div className="single-offer__row">
                                      <figure className="single-offer__tick">
                                          {/*<img src="./img/mbank__tick.png" alt="">*/}
                                      </figure>
                                      <p className="single-offer__label">
                                          17:00 Liturgia Wielkiego Piątku.
                                      </p>
                                  </div>
                                  <div className="single-offer__row">
                                      <figure className="single-offer__tick">
                                          {/*<img src="./img/mbank__tick.png" alt="">*/}
                                      </figure>
                                      <p className="single-offer__label">
                                          Adoracja do godz. 23:00.
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="single-offer">
                              <div className="single-offer__top">
                                  <div className="single-offer__content">
                                      <h4 className="single-offer__title title--small">
                                          Wielka Sobota
                                      </h4>
                                  </div>
                                  <figure className="single-offer__image">
                                      <img src={icon_3} alt="alt" />
                                  </figure>
                              </div>
                              <div className="single-offer__main">
                                  <div className="single-offer__row">
                                      <figure className="single-offer__tick">
                                          {/*<img src="./img/mbank__tick.png" alt="">*/}
                                      </figure>
                                      <p className="single-offer__label">
                                          O godz. 9:00; 10:00 Poświęcenie pokarmów wielkanocnych.
                                      </p>
                                  </div>
                                  <div className="single-offer__row">
                                      <figure className="single-offer__tick">
                                          {/*<img src="./img/mbank__tick.png" alt="">*/}
                                      </figure>
                                      <p className="single-offer__label">
                                          O godz. 11:00 i 12:00 Poświęcenie pokarmów wielkanocnych.
                                      </p>
                                  </div>
                                  <div className="single-offer__row">
                                      <figure className="single-offer__tick">
                                          {/*<img src="./img/mbank__tick.png" alt="">*/}
                                      </figure>
                                      <p className="single-offer__label">
                                          20:00 Rozpoczyna się Liturgia Wielkiej Soboty.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <span className="arrow-down arrow-down--offer">
                {/*<img src="./img/mbank__arrow-down.png" alt="">*/}
            </span>
          </section>
      </Fragment>
  );
};

export default Ad;