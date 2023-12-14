import './App.css';

import {useState} from 'react'; 

import Header from './components/header/Header';
import Services from './components/services/Services';

function App() {

  const [data,setData] = useState({customer_name: "", customer_company: "", customer_phoneNumber: "", description: ""});
  const [succcess, setSuccess] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  function handleSubmit(event){
    event.preventDefault();
    //if the form does not contain ANY errors, proceed to submit the form.
    if(checkForm()){
      fetch('http://localhost/Scriping-Techniques-Project-HZ-JF/freelance-frontend/php/submitForm.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        }).then((response) => { 
          console.log(response);
          setSuccess(true);
        }).catch((error) => { 
          console.log(error);
      });
    }
  }

  function checkForm(){
    var name = document.getElementById("name"); 
    var company = document.getElementById("company"); 
    var phoneNumber = document.getElementById("phone_number"); 
    var description = document.getElementById("description");
    var error = document.getElementsByClassName("error-list")[0];
    var phoneRegex = /^\d{10}$/;
    var errors = []; 

    if(data.customer_name === ""){
      errors.push("Please enter your name.");
      name.classList.add("error");
    }
    else{
      name.classList.remove("error");
    }

    if(data.customer_company === ""){
      errors.push("Please enter your company.");
      company.classList.add("error");
    }
    else{
      company.classList.remove("error");
    }

    if (!phoneRegex.test(phoneNumber.value.trim())) {
      errors.push("Please enter a valid phone number.");
      phoneNumber.classList.add("error");
    } else {
      phoneNumber.classList.remove("error");
    }

    if(data.customer_phoneNumber === ""){
      errors.push("Please enter your phone number.");
      phoneNumber.classList.add("error");
    } else {
      phoneNumber.classList.remove("error");
    }

    if(data.description === ""){
      errors.push("Please enter a description.");
      description.classList.add("error");
    } else {
      description.classList.remove("error");
    }

    if(errors.length > 0){
      error.innerHTML = "<ul>";
      for(var i = 0; i < errors.length; i++){
        error.innerHTML += "<li>" + errors[i] + "</li>";
      }
      error.innerHTML += "</ul>";
      return false;
    }

    error.innerHTML = "";
    return true; 
  }


  return (
    <>
      <main class = "main-content">
        <div class = "company-logo">
          <h1>Bella Technical Solutions</h1>
          <p>Writing beautiful software, <i>one line at a time.</i> </p>
        </div>
        {/* Header element on the page, each href will point to each section of the page */}
        <Header />
        <section id = "about-us">
          <h1>About Us</h1>
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
                    <div class = "employee-photo joe-photo"/>
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
              <div class="employee-badge">
                      <div class="employee-photo Haitam-photo" />
                      <div class="employee-info">
                        <h4>Haitam Zitouni</h4>
                        <p>Revere, MA</p>
                        <p>Software Engineer</p>
                      </div>
                    </div>
                    <div class="employee-bio">
                      <p>
                        Haitam is an adept full-stack software engineer specializing in web development, 
                        demonstrating strong expertise in Java, JavaScript, and Python. 
                        His versatile skill set extends to working with SQL and NoSQL databases, reflecting proficiency in database development. 
                        With a keen understanding of the software lifecycle, Haitam leverages his commercial experience to contribute effectively at every project stage. 
                        His commitment to excellence and attention to detail ensures the delivery of high-quality software solutions.
                      </p>
                    </div>
              </td>
            </tr>
          </table>
        </section>
        <section id = "services"> 
        <h1>Our Services</h1>
            <Services/>
        </section>
        <section id = "contact-us">
          <h1>Contact Us</h1>
          <p>
            We are always looking for new clients to work with. 
            If you are interested in working with us, please fill out the contact
            information below and we will get back to you as soon as possible. 
          </p>  
          <form class = "contact-form" onSubmit = {handleSubmit}>
              <div>
                  <input type = "text" id = "name" name = "customer_name" placeholder = "Your name:" onChange = {handleChange}/>
              </div>
              <div>
                  <input type = "text" id = "company" name = "customer_company" placeholder = "Your company:" onChange = {handleChange}/>
              </div>
              <div>
                  <input type = "text" id = "phone_number" name = "customer_phoneNumber" placeholder = "Phone number to reach you at:" onChange = {handleChange}/>
              </div>
              <div>
                  <textarea rows = "5" id = "description" name = "description" placeholder = "Tell us about your company:" onChange = {handleChange} />
              </div>
              <input type = "submit"/>
              {succcess && <p>Your form has been submitted successfully!</p>}
              <div class = "error-list"></div>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
