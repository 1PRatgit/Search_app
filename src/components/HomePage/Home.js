import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div >
      <div class="container-fluid background-container">
        {/* NavBar section */}
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


        <div class="container inner-container">
          {/* Introduction section */}
          <div class="row">
            <div class="col-md-6">
              <h1>Varshini terracotta</h1>
              <p>is a designed and curated collection
                of contemporary lifestyle products in traditional terracotta crafts from heritage pottery clusters of India.</p>
              <span>
                Each state or region of Bharat has its own unique styles of indigenous clay craft or pottery which has been handed down since generations,
                but slowly loosing out to industrial products.

              </span>
              <br></br>
              <br></br>
              <span>
                At varshini Terracotta, we connect traditional pottery clusters of our culturally rich motherland,
                making beautiful indigenous pottery and unable to sell to far-away buyers,
                with discerning craft lovers with no direct access to these beautiful products,
                through the power of e-commerce!

              </span>

            </div>
            <div class="col-md-6">
              <img className="intro-image" src={require('../Images/prod1.jpg')} />
            </div>
          </div>
          <br></br>
          {/* shop section */}


          <br></br>

        </div>
      </div>

    </div>

  )
}

export default Home