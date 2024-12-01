
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const { results } = await response.json();
      setData((prev) => [...prev, ...results]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]); 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <section className="landing">
      <div className="row container">
        <h1 className="landing-heading">Infinite Scroll with Rick and Morty Characters</h1>
        {data.map((character) => (
          <div key={character.id} className="character-card">
            <h3 className="heading">Name: {character.name}</h3>
            <img src={character.image} alt={character.name} className="character-image" />
          </div>
        ))}
        {loading && <p className="loading">Loading...</p>}
      </div>
    </section>
  );
};

export default App;
