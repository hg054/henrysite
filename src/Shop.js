import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
},[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data =  await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');

    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  }

  return (
    <div>
        <h1>
          <Link to='/shop/borger'>
            Borger 3.50
          </Link>
        </h1>

        <h1>
          <Link to='/shop/sosig'>
            Sosig Edited
          </Link>
        </h1>
    </div>
  );
}

export default Shop;