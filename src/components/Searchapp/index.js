import React from 'react'
import './index.css';

const index = () => {
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
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#shop">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
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
        <h2>Products</h2>
        <br></br><br></br>
        <div class="row" id="shop">
          <div class="col-md-4">
            <div class="card mb-4">
              <img src={require('../Images/prod7.jpg')} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">Product Description</p>
                <p className="card-text">Price: $99.99</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <img src={require('../Images/prod5.jpg')} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">Product Description</p>
                <p className="card-text">Price: $99.99</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <img src={require('../Images/prod9.jpg')} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">Product Description</p>
                <p className="card-text">Price: $99.99</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <br></br>

      {/* contact section */}
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
      

      </div>
     </div>

    </div>
    

    


  )
}

export default index