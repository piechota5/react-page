import React, {Component} from 'react';
import {FaCalendarAlt} from 'react-icons/fa';

class Counter extends Component{

    componentDidMount() {
        this.setCounter()
    }

    setCounter = () => {
        let countDownDate = new Date("Dec 24, 2019, 0:00:00").getTime();

        setInterval(function() {
            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.querySelector('.counter__number--days').innerHTML = days;
            document.querySelector('.counter__number--hours').innerHTML = hours;
            document.querySelector('.counter__number--minutes').innerHTML = minutes;
            document.querySelector('.counter__number--seconds').innerHTML = seconds;
        }, 1000);
    }


    render() {

        return(
            <section className="counter">
                <div className="row">
                    <div className="col-xs-12 col-md-6 p-0">
                        <div className="counter__left counter__item">
                            <span className="counter__left__overlay"></span>
                            <div className="counter__content">
                                <p className="counter__title">
                                    <FaCalendarAlt /> Nadchodzące wydarzenie
                                </p>
                                <p className="counter__subtitle">
                                    Nazwa wydarzenia
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 p-0">
                        <div className="counter__right counter__item">
                            <span className="counter__right__overlay"></span>
                            <div className="counter__content">
                                <div className="counter__inner">
                                    <div className="counter__date">
                                        <p className="counter__number counter__number--days">{this.counter}</p>
                                        <p className="counter__label">Dni</p>
                                    </div>
                                    <div className="counter__date">
                                        <p className="counter__number counter__number--hours">16</p>
                                        <p className="counter__label">Godzin</p>
                                    </div>
                                    <div className="counter__date">
                                        <p className="counter__number counter__number--minutes">33</p>
                                        <p className="counter__label">Minut</p>
                                    </div>
                                    <div className="counter__date">
                                        <p className="counter__number counter__number--seconds">12</p>
                                        <p className="counter__label">Sekund</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Counter;