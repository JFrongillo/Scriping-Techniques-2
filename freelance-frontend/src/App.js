import './App.css';

import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <main class = "main-content">
        <div class = "welcome-message">
          <h1>Welcome!</h1>
          <p>Welcome to our freelance page.</p>
        </div>
        <div>
          <h2>What we do</h2>
          <p>We provide a variety of services to our customers.</p>
        </div>
      </main>
    </>
  );
}

export default App;
