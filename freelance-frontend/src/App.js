import './App.css';

import Header from './components/header/Header';

function App() {
  return (
    <>
      <main class = "main-content">
        <div class = "company-logo">
          <h1>Bella Technical Solutions</h1>
          <p>Writing beautiful software, <i>one line at a time.</i> </p>
        </div>
        {/* Header element on the page, each href will point to each section of the page */}
        <Header />
        <section id = "welcome-message">
        <h1>Welcome!</h1>
        </section>
        <section id = "about-us">
          <h2>Who we are</h2>
          <p>
            We are two passionate Software Engineers from Salem State University looking to make the world a better place <br/> 
            <code>
                <i>
                    One line of code at a time.<br/>
                </i>
            </code>
          </p>
          <p>
              Our team consists of two people: 
          </p>
          <table class = "employee-table">
            <tr>
              <td>
                TODO: ADD JOSEPH BIO
              </td>
              <td>
                TODO: ADD HATAIM BIO
              </td>
            </tr>
          </table>
        </section>
        <section id = "services"> 

        </section>
        <section id = "contact-us">

        </section>
      </main>
    </>
  );
}

export default App;
