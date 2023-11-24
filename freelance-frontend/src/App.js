import './App.css';

import Header from './components/header/Header';
import Services from './components/services/Services';

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
          <h2>Who We Are</h2>
          <p>
            We are two passionate Software Engineers from Salem State University looking to make the world a better place <br/> 
            <code>
                <i>
                    One line of code at a time.<br/>
                </i>
            </code>
          </p>
          <h3>Our team consists of two people:</h3>
          <table class = "employee-table">
            <tr>
              <td class = "employee-container">
                  <div class = "employee-badge">
                    <div class = "joe-photo"/>
                    <div class = "employee-info">
                      <h4>Joseph Frongillo</h4>
                      <p>Chelsea, MA</p>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                  <div class = "employee-bio">
                    <p>
                      Joseph is a Full Stack Software Engineer specalizing in Front End and Back end applications. 
                      He has half a decade experience with programming with Java. 
                      Has a good understanding of C, C++, JavaScript, and Python. 
                      Experience with database development with SQL and MongoDB. 
                      Fully knowledgeable in software patterns and practices, commertical experience of the full software lifecycle. 
                      Strong attention to details.
                    </p>
                  </div>
              </td>
              <td class = "employee-container">
                TODO: ADD HATAIM BIO
              </td>
            </tr>
          </table>
        </section>
        <section id = "services"> 
        <h2>Our Services</h2>
            <Services/>
        </section>
        <section id = "contact-us">

        </section>
      </main>
    </>
  );
}

export default App;
