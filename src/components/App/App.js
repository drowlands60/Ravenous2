import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../logo.svg';

//Business Object
let business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

//Business Array
let businessArr = [
  business,
  business,
  business,
  business,
  business,
  business
];


class App extends React.Component {
  
  searchYelp(term, location, sortBy) {
    console.log(`looking for ${term} in ${location}, ${sortBy}`)
  }
  
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={businessArr} /> 
      </div>
  )};
}

export default App;
