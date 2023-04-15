import React, { useEffect, useState } from 'react'
import Plant from '../Plant';
import './index.css';
const Searchapp = () => {
  const API_URL = "https://perenual.com/api/species-list?page=1&key=sk-mgy1643666f7adda3485";

  const [query, setQuery] = useState('');
  const [plantitem, setplantitem] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setplantitem(data.data);
      })
  }, [])


  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
       const url = `https://perenual.com/api/species-list?key=sk-mgy1643666f7adda3485&q=${query}`;
      
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setplantitem(data.data);
    }
    catch (e) {
      console.log(e);
    }
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='' alt='logo' />
          </div>
          <h4 className='bot'>
            Botanic: of and for the earth
          </h4>
          <h4>
          <a href = "">My list</a>
            </h4>
        </div>
      </header>
      <section className='hero'>
        <div className='container'>
          <h3>Search for Botanics</h3> <h6>rose, sunflower,cherry, apple</h6>

            <form className="flex" onSubmit={searchMovie} autoComplete="off">
              <input
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query} onChange={changeHandler} />
                
              <button variant="secondary" type="submit">Search</button>
            </form>
          
        </div>
      </section>
      <div>
        {plantitem.length > 0 ? (
          <div className="container1">
            <div className="grid">
              {plantitem.map((movieReq) =>
                <Plant key={movieReq.id} {...movieReq} />)}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No plantitem Found</h2>
        )}
      </div>


    </>
  );

}

export default Searchapp