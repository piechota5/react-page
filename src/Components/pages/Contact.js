import React, {Component} from 'react';
import firebase from "../db/Database";
import Copyright from "../sections/homepage/Copyright";


class Contact extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            formVisible : true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const itemName = event.target.name;
        const itemValue = event.target.value;

        this.setState({
            [itemName] : itemValue
        });
    }

    handleSubmit(event){
        event.preventDefault();

        let messageInfo = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        const ref = firebase.database().ref(`messages/`);
        ref.push({
            name : messageInfo.name,
            email : messageInfo.email,
            message: messageInfo.message
        });

        this.setState({
            formVisible: false
        });
    }


    render() {
        return(
            <>
                <div className="hero hero--contact">
                    <h1 className="hero__title">Kontakt</h1>
                    <span className="hero__overlay"></span>
                </div>
                <div className="contact">
                <div className="container">
                    <div className="contact__row">
                        <h2 className="contact__left">
                            Kancelaria przy Parafii MB Różańcowej w Charsznicy <span>.</span>
                        </h2>
                        <div className="contact__right">
                            <h3 className="contact__right__header">Czynna</h3>
                            <ul className="contact__list">
                                <li className="contact__item">
                                    Poniedziałek - godz. 7:30 - 9:00
                                </li>
                                <li className="contact__item">
                                    Wtorek - godz. 7:30 - 9:00
                                </li>
                                <li className="contact__item">
                                    Środa - godz. 15:00 - 16:30
                                </li>
                                <li className="contact__item">
                                    Czwartek - godz. 15:00 - 16:30
                                </li>
                                <li className="contact__item">
                                    Piątek - godz. 15:00 - 16:30
                                </li>
                                <li className="contact__item">
                                    Sobota - godz. 7:30 - 9:00
                                </li>
                                <li className="contact__item">
                                    Niedziela i Święta - nieczynna
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact__row">
                        <h2 className="contact__left">
                            Adres oraz telefon <span>.</span>
                        </h2>
                        <div className="contact__right">
                            <h3 className="contact__right__header">Kontakt</h3>
                            <ul className="contact__list">
                                <li className="contact__item">
                                    ul. Młyńska 14
                                </li>
                                <li className="contact__item">
                                    32-250 Charsznica
                                </li>
                                <li className="contact__item">
                                    tel. kancelaria - 41 230 80 63
                                </li>
                                <li className="contact__item">
                                    tel. proboszcz - 602 458 778
                                </li>
                            </ul>
                        </div>
                    </div>
                    {this.state.formVisible === true ? (
                        <form className="mt-3" onSubmit={this.handleSubmit}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h1 className="section-title text-center mb-lg-5">Skontaktuj się</h1>
                                        <div className="card bg-light">
                                            <div className="card-body">
                                                <div className="form-row">
                                                    <section className="col-sm-12 form-group d-flex">
                                                        <h5 className="col-sm-4 align-self-center">Imię</h5>
                                                        <label
                                                            className="form-control-label sr-only"
                                                            htmlFor="name"
                                                        >
                                                            imię
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            id="name"
                                                            placeholder="Twoje imię"
                                                            required
                                                            name="name"
                                                            value={this.state.name}
                                                            onChange={this.handleChange}
                                                        />
                                                    </section>
                                                </div>
                                                <div className="form-row">
                                                    <section className="col-sm-12 form-group d-flex">
                                                        <h5 className="col-sm-4 align-self-center">Adres e-mail</h5>
                                                        <label
                                                            className="form-control-label sr-only"
                                                            htmlFor="email"
                                                        >
                                                            adres e-mail
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="email"
                                                            id="email"
                                                            placeholder="Twój adres e-mail"
                                                            required
                                                            name="email"
                                                            value={this.state.email}
                                                            onChange={this.handleChange}
                                                        />
                                                    </section>
                                                </div>
                                                <div className="form-row">
                                                    <section className="col-sm-12 form-group d-flex">
                                                        <h5 className="col-sm-4 align-self-center">Wiadomość</h5>
                                                        <label
                                                            className="form-control-label sr-only"
                                                            htmlFor="message"
                                                        >
                                                            Wiadomość
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            id="message"
                                                            placeholder="Wiadomość"
                                                            required
                                                            name="message"
                                                            value={this.state.message}
                                                            onChange={this.handleChange}
                                                        />
                                                    </section>
                                                </div>
                                                <div className="form-group text-right mb-0">
                                                    <button className="btn " type="submit">
                                                        Wyślij wiadomość
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    ) : (
                        <div className="alert alert-success text-center" role="alert">
                            Wiadomość została wysłana, dziękujemy!
                        </div>
                        )
                    }

                </div>
            </div>
                <Copyright />
            </>
        )
    }
}

export default Contact;