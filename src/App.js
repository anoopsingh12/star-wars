import React, { useContext } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Result from './components/Result';

import { Context } from "./context/Context";

const App = () => {

  const {state: { data }} = useContext(Context)

  return (
      <div className="App">
         <Header />
         <Search />
         { (data.length) ? <Result/> : "There are no results related to your search" }
      </div>
  )
}

export default App
