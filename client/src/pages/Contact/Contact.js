import React, { Component } from "react";
import Navbar from '../../components/Nav';
import './Contact.css'
import { AwesomeButton } from 'react-awesome-button';
import API from '../../utils/API';

// In your render...



class Contact extends Component {


    state = {
        user: '',
        email: '',
        message: '',
        users: []
    };

    componentDidMount() {
        // console.log(this.state.user);
    }



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleForSubmit = event => {
        event.preventDefault();
        if (this.state.user && this.state.email && this.state.message) {
            API.saveUser({
                name: this.state.user,
                email: this.state.email,
                message: this.state.message

            }).then(res => { console.log(res) }).catch(err => { console.log(err) })
        }
        console.log(this.state.user);
        console.log(this.state.message);
        console.log(this.state.email);
    };



    render() {


        return (
            <div>

                <Navbar></Navbar>
                <br></br>
                <header>Get in Touch</header>
                <br></br><br></br>

                <h4>Say Hi by filling up the form below or email me direclty at <span id="email">walid.boubguira@gmail.com.</span><br></br> Let's get social, network and brainstorm ideas <i className="fas fa-hand-rock"></i> <i className="fab fa-rocketchat"></i> <i className="fas fa-smile"></i> </h4>
                <br></br><br></br>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={this.handleForSubmit}>
                                <div className="form-group">

                                    <h2>Form</h2>
                                    <input
                                        id="input"
                                        onChange={this.handleInputChange}
                                        value={this.state.user}
                                        name="user"
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Name"

                                    />
                                    <br></br>
                                    <input
                                        id="input"
                                        onChange={this.handleInputChange}
                                        value={this.state.email}
                                        name="email"
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Email"

                                    />
                                    <br></br>
                                    <textarea
                                        id="input"
                                        onChange={this.handleInputChange}
                                        value={this.state.message}
                                        name="message"
                                        type="textarea"
                                        rows="7"
                                        className="form-control"
                                        placeholder="Type in your message"

                                    />
                                    <br></br>
                                    <AwesomeButton
                                        onClick={this.handleForSubmit}
                                        type="github"
                                        className="submit-form"
                                    >
                                        Submit
      </AwesomeButton>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <br></br>
                            <h4>A good programer is someone who looks both ways before crossing a one-way street.</h4>
                            <br></br><br></br>
                           
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact;