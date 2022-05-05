import React, { useState, useEffect } from 'react';
import Main from './components/layout/Main';
import './style/normalize.css';
import './style/main.css';

const App = () => {
  const [ database, setDatabase ] = useState([]);

  /* fetch song data */
  const getData = () => {
    fetch("./server/data.json")
      .then(res => res.json())
      .then((result) => {
          setDatabase(result.songs)
        },
        (err) => {
          console.log(err)
        }
      )
  }

  /* get data */
	useEffect(() => {
    getData();
    return () => {}
  }, []);

  return (
    <div className="App">
      <Main database={database} />
    </div>
  );
}

export default App;
