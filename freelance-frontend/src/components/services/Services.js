
import "./Services.css"

export default function Services(){
    return(
        <>
            <p>
                Our team specializes in customizing solutions that align perfectly with your unique requirements.
                 Whether you're looking for a one-time service or ongoing support, we're here to assist.
            </p>
            <p>
                From initial consultation to final implementation, our focus is on delivering exceptional quality and value. 
                We understand that every client is different, and we're committed to finding the right approach for you.
            </p>
            <h3>Here is some of the services that we offer:</h3>
            <div class = "services-container">
                <div class = "service">
                    <div class = "service-header">
                        <p><span>Website Administration</span></p>
                    </div>
                    <ul>
                        <li><strong>Starting at: $250</strong></li>
                        <li>Frontend Services</li>
                        <li>Backend Services</li>
                        <li>Database Management</li>
                    </ul>
                    <div class = "contact-us">
                        <a href = "#contact">Contact Us</a>
                    </div>
                </div>
                <div class = "service">
                    <div class = "service-header">
                        <p><span>Application Development</span></p>
                    </div>
                    <ul>
                        <li><strong>Starting at: $1,000</strong></li>
                        <li>Consultation</li>
                        <li>Development and Production</li>
                        <li>24/7 Maitenence</li>
                    </ul>
                    <div class = "contact-us">
                        <a href = "#contact">Contact Us</a>
                    </div>
                </div>
                <div class = "service">
                    <div class = "service-header">
                        <p><span>Website Development</span></p>
                    </div>
                    <ul>
                        <li><strong>Starting at: $1,500</strong></li>
                        <li>Consultation</li>
                        <li>Design, Implmentation, and Maitenence</li>
                        <li>Database Design and Maitenence</li>
                    </ul>
                    <div class = "contact-us">
                        <a href = "#contact">Contact Us</a>
                    </div>
                </div>
            </div>
        </>
    );
}