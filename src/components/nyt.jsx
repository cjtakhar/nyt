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
        `https://nyt-search-api.wl.r.appspot.com/articles?q=${search}`
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
      <h1 className="nyt-title">New York Times</h1>
      <h2>Article Search</h2>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
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
             
              <p className="article-text">{article.snippet}</p>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NYT;