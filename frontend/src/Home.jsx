import './css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <span role="img" aria-label="Compass" className="logo-icon">🧭</span>
          <span className="logo-text">Community Compass</span>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/learn">Learn</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <p className="tagline">
          Bridging the gap between those in need and available community resources
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for resources..."
            className="search-input"
          />
          <button className="search-button" aria-label="Search">
            <img 
              src="/search-button.svg" 
              alt="Search" 
              className="search-icon"
            />
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;