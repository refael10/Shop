// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Headre/Header';
import Products from './Components/Products/Products';
// import Todos from './Components/Todos';
// import Sumting from './components/Sumting/Sumting';
// import Todo from './components/Todo';
import myContext from './MyContext';
import Button from '@mui/material/Button';

function App() {
  const [dark, setDark] = useState(false);
  const doDark = () => {
    setDark(!dark)
  }

  // const [list, setList] = useState([]);
  const [fullList, setFullList] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        // setList(list)
        setFullList(data)
      })
  }, [])

  const category = fullList.map(val => val.category).filter(
    (value, index, array) => array.indexOf(value) === index)
  const sort = (index) => {
    setFullList(fullList.filter((val) => val.category === index))
  }


  return (
    <div style={dark ? { background: 'black', color: 'white' } : { background: !dark }} className="App">
      <myContext.Provider value={[dark, setDark]} >
        <BrowserRouter>
          <Button variant="contained" onClick={() => { doDark(dark) }}>click</Button>
          <Header category={category} sort={sort} list={fullList} />
          <Products list={fullList} />
          <Routes>
            {/* <Route path='/' element={} /> */}
            {/* <Route path='/' element={} /> */}

            {/* <Sumting /> */}

            {/* <Todos dark={dark} /> */}
          </Routes>
        </BrowserRouter>
      </myContext.Provider>
    </div >
  );
}

export default App;
