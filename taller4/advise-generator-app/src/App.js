import React, { useState, useEffect } from 'react';
import './App.css';
import useFetch from './useFetch';

const App = () => {
  const { data, loading, error, fetchData } = useFetch('https://api.adviceslip.com/advice');
  const [prevDataId, setPrevDataId] = useState(null);


  useEffect(() => {
    if (prevDataId === data?.slip?.id) {
      fetchData();
    }

    setPrevDataId(data?.slip?.id);
  }, [data]);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">Error...</div>;
  }

  return (
    <div className="container">
      <h1>Advice #{data?.slip?.id}</h1>
      <p>{data?.slip?.advice}</p>

      <picture>
        <source media="(min-width: 768px)" srcSet="./images/pattern-divider-desktop.svg" />
        <img src="./images/pattern-divider-mobile.svg" alt="divider" />
      </picture>

      <div>
        <button onClick={() => fetchData()}>
          <img src="./images/icon-dice.svg" alt="Get new advice" />
        </button>
      </div>
    </div>
  );
};

export default App;
