import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './login.css';

export default class login extends Component {
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
                                {/* <img class="logo" src="images/seeckingLogo.png" alt=""> */}
                                <p class="pt-4">SEECKING</p>
                            </div>
                            <div className="intro pb-5">
                                <h1>Welcome To Seecking</h1>
                                <p>Sign In/Sign Up...</p>
                                <p>Gain more loose nothing!</p>
                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <div className="container formbox">
                                <div className="">
                                    <form>
                                        <div className="form-header text-center">
                                            <h1>Sign In</h1>
                                            <button type="button" className="btn btn-outline-primary btn-lg btn-block mt-5"><i className="fab fa-google mr-3"></i>Continue with Google</button>
                                        </div>
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
                                        </div>
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <button type="submit" className="btn btn-lg btn-block submitbtn">Sign In</button>
                                        <div className="footer text-center">
                                            <p>New to Seecking? <a href="signup.html">Sign Up</a></p>
                                            <p>Forgot your password? <a href="#">Recover password</a></p>
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
