import React from 'react'
import { Link } from 'react-router-dom'
import '../HomePage/index.css';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <div class="container-fluid background-container">
                <nav class="navbar navbar-expand-lg navbar-light transparent-navbar white-navbar">
                    {/* <a class="navbar-brand" href={require('../Images/leaf.png')}>Logo</a> */}
                    <img className="navbar-brand" src={require('../Images/leaf.png')} />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">

                            <li class="nav-item">
                                <Link to="/About" className="nav-link">About</Link>

                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#shop">Shop</a> */}
                                <Link to="/ProductShow" className="nav-link">Shop</Link>

                            </li>
                            <li class="nav-item">
                                <Link to="/Contact" className="nav-link">  Contact</Link>

                            </li>

                        </ul>
                    </div>
                </nav>

                {/* contact section */}
                <div class="container inner-container">
                <div class="container" id="contact">
                    <h1>Contact Us</h1>
                    <br></br>
                    Email: admin@varshiniterracotta.com
                    <br></br><br></br>
                    Whatsapp: 09901930567
                    <br></br><br></br>
                    Address:
                    320 2nd Main, 2nd Cross Rd, Narayanpura, Dharwad, Karnataka 580008
                </div>
                <br></br>
                <div class="container google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7690.774194269407!2d74.9947936!3d15.4635968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8cd7bc2f5c613%3A0x76a42cd270000000!2sVarshini%20terracotta!5e0!3m2!1sen!2sin!4v1686365337465!5m2!1sen!2sin" 
                width="600" height="450" 
                style={{border:"0"}}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            </div>
            </div>


        </div>
    )
}

export default Contact