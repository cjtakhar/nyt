import React, { useState } from 'react';
import axios from 'axios';
import './styles/nyt.css';

const NYT = () => {
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:5000/articles?q=${search}`
      );
      const retrievedArticles = res.data;
      setArticles(retrievedArticles);
      setSearched(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="nyt-container">
      <h1 className="nyt-title">New York Times Article Search</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="form-button" type="submit">Search</button>
        </form>
      </div>
      <div className="res-container">
        {searched && articles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          articles.map((article, index) => (
            <div className="article-info" key={index}>
              <a 
              href={article.web_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="article-link"
              >
                <h3 className="article-title">{article.headline.main}</h3>
              </a>
              <p className="article-text">{article.snippet}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NYT;