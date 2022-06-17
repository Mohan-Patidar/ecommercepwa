import React from 'react';
import './App.css';
import Banner from './Components/Banner';
import Counter from './Components/Counter';
import Navbar from './Components/Navbar/Navbar';
import Categories from './Components/Products/Categories';


function App() {
  return (
    
    <div className="App">
     
      <Navbar/>
      <Banner/>
     {/* <Counter/> */}
     <Categories/>
    </div>
  );
}

export default App;
