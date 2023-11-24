
import "./Services.css"

export default function Services(){
    return(
        <>
        <div class = "services-container">
            <p>
                Our team specializes in customizing solutions that align perfectly with your unique requirements.
                Whether you're looking for a one-time service or ongoing support, we're here to assist.
            </p>
            <p>
                From initial consultation to final implementation, our focus is on delivering exceptional quality and value. 
                We understand that every client is different, and we're committed to finding the right approach for you.
            </p>
            
            <div class = "services">
            <header>
                <h3>Services That We Offer</h3>
            </header>
                <div class = "column">
                    <h4>Website Administration</h4>
                    <p class = "price">Starting at <span>$250</span>/mo</p>
                    <ul>
                        <li>Frontend Services</li>
                        <li>Backend Services</li>
                        <li>Database Management</li>
                        <li>Ongoing <strong>24/7</strong> Maitenence</li>
                    </ul>
                    <div class = "contact-us"><a href="#">Contact Us</a></div>
                </div>
                <div class = "column featured">
                    <h4>Application Development</h4>
                    <p class = "price">Starting at: <span>$1,000</span>/mo</p>
                    <ul>
                        <li>Consultation</li>
                        <li>Development and Production</li>
                        <li>Database Development</li>
                        <li>Ongoing <strong>24/7</strong> Maitenence</li>
                    </ul>
                    <div class = "contact-us"><a href="#">Contact Us</a></div>
                </div>
                <div class = "column">
                    <h4>Website Development</h4>
                    <p class = "price">Starting at <span>$1,500</span>/mo</p>
                    <ul>
                        <li>Design and Consultation</li>
                        <li>Implmentation and Maitenence</li>
                        <li>Database Design and Management</li>
                        <li>Ongoing <strong>24/7</strong> Maitenence</li>
                    </ul>
                    <div class = "contact-us"><a href="#">Contact Us</a></div>
                </div>
            </div>
        </div>
        </>
    );
}