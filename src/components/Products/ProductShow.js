
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductShow = () => {
  const [sortBy, setSortBy] = useState(''); // State to keep track of the sorting option

  // Function to handle the sorting option change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Function to sort the products based on the selected option
  const sortProducts = (products) => {
    if (sortBy === 'highToLow') {
      return products.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'lowToHigh') {
      return products.sort((a, b) => a.price - b.price);
    }
    return products;
  };



  // Dummy product data for testing
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Product 1 Description',
      price: 99.99,
      image: require('../Images/prod7.jpg'),
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Product 2 Description',
      price: 49.99,
      image: require('../Images/prod5.jpg'),
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Product 3 Description',
      price: 149.99,
      image: require('../Images/prod9.jpg'),
    },
  ];
  const sortedProducts = sortProducts(products); // Sort the products based on the selected option



  return (<div>
    <div className="container-fluid background-container">
      {/* NavBar section */}
      <nav className="navbar navbar-expand-lg navbar-light transparent-navbar white-navbar">
        <img className="navbar-brand" src={require('../Images/leaf.png')} alt="Logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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

      <div className="container inner-container">
        {/* Introduction section */}
        <div className="row">
          <div className="col-md-6">
            <h1>Products</h1>
          </div>
        </div>
        <br />
        {/* Sort By section */}
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" value={sortBy} onChange={handleSortChange}>
              <option value="">Select</option>
              <option value="highToLow">Price: High to Low</option>
              <option value="lowToHigh">Price: Low to High</option>
            </select>
          </div>
        </div>
        <br />
        {/* Shop section */}
        <div className="row" id="shop">
          {sortedProducts.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4">
                <img src={require(`../Images/prod${product.id}.jpg`)} className="card-img-top" alt="Product" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: ${product.price}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};
export default ProductShow;

