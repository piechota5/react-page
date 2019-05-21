import React, {Component} from 'react';
import firebase from "../db/Database";

class Contact extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
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

        debugger;

        const ref = firebase.database().ref(`messages/`);
        ref.push({
            name : messageInfo.name,
            email : messageInfo.email,
            message: messageInfo.message
        })

    }


    render() {
        return(
            <div className="contact">
                <div className="container">
                    <form className="mt-3" onSubmit={this.handleSubmit}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h1>Skontaktuj się</h1>
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <div className="form-row">
                                                <section className="col-sm-12 form-group d-flex">
                                                    <h5 className="col-sm-4 align-self-center">Your name</h5>
                                                    <label
                                                        className="form-control-label sr-only"
                                                        htmlFor="name"
                                                    >
                                                        name
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="name"
                                                        placeholder="name"
                                                        required
                                                        name="name"
                                                        value={this.state.name}
                                                        onChange={this.handleChange}
                                                    />
                                                </section>
                                            </div>
                                            <div className="form-row">
                                                <section className="col-sm-12 form-group d-flex">
                                                    <h5 className="col-sm-4 align-self-center">Your email</h5>
                                                    <label
                                                        className="form-control-label sr-only"
                                                        htmlFor="email"
                                                    >
                                                        email
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="email"
                                                        id="email"
                                                        placeholder="email"
                                                        required
                                                        name="email"
                                                        value={this.state.email}
                                                        onChange={this.handleChange}
                                                    />
                                                </section>
                                            </div>
                                            <div className="form-row">
                                                <section className="col-sm-12 form-group d-flex">
                                                    <h5 className="col-sm-4 align-self-center">Your message</h5>
                                                    <label
                                                        className="form-control-label sr-only"
                                                        htmlFor="message"
                                                    >
                                                        message
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="message"
                                                        placeholder="message"
                                                        required
                                                        name="message"
                                                        value={this.state.message}
                                                        onChange={this.handleChange}
                                                    />
                                                </section>
                                            </div>
                                            <div className="form-group text-right mb-0">
                                                <button className="btn btn-primary" type="submit">
                                                    Send message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;