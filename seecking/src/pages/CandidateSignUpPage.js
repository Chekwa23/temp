import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import seeckingLogo from '../images/seeckingLogo.png';
import './CandidateSignUpPage.css'

export default class CandidateSignUpPage extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
                <div className="container-fluid backlay">
                    <div className="row">
                        <div className="col-md-6 left">
                            <div className="brandName">
                                <img className="logo" src={seeckingLogo} alt=""/>
                                <p className="pt-4">SEECKING</p>
                            </div>
                            <div className="intro pb-5">
                                <h1>Welcome To Seecking</h1>
                                <p>Sign Up...</p>
                                <p>Gain more loose nothing!</p>
                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <div className="container formbox">
                                <div className="">
                                    <form>
                                        <div className="form-header text-center">
                                            <h1>Sign Up</h1>
                                            <button type="button" className="btn btn-outline-primary btn-lg btn-block mt-5"><i className="fab fa-google mr-3"></i>Continue with Google</button>
                                        </div>
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <div className="form-row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label for="exampleInputFirstName">First name</label>
                                                    <input type="text" className="form-control" id="exampleInputFirstName" aria-describedby="nameHelp" placeholder="Enter First name" required/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label for="exampleInputLastName">Last name</label>
                                                    <input type="text" className="form-control" id="exampleInputLastName" aria-describedby="nameHelp" placeholder="Enter Last name" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required/>
                                        </div>
                                        <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" required/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword2">Re-Enter Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Re-Enter Password" required/>
                                        </div>
                                        <button type="submit" className="btn btn-lg btn-block submitbtn"><a href="candidateForm.html">Sign Up</a></button>
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <div className="footer text-center">
                                            <p>Already have an account? <Link to="/">Sign In</Link></p>
                                            <p>By signing up, you are agreeing to our <a id="terms" href="#">Terms of Use</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
