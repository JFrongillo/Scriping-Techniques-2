import './App.css';

import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <main class = "main-content">
        <div class = "welcome-message">
          {/*Maybe add a typing effect that says welcome in dfferent langages?*/}
          <h1>Welcome!</h1>
          <p>To <strong>Bella Technical Solutions</strong>'s home page!</p>
        </div>
        <div>
          <h2>What we do</h2>
          <p>We provide a variety of services to our customers.</p>
        </div>
        <div id = "about-us">

        </div>
      </main>
    </>
  );
}

export default App;
