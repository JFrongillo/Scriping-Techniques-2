import "./Header.css"

export default function Header() {
    //JSX code for the header of the webpage.

    const scrollToSelectedSection = (section) => {
        section.preventDefault();
        //gets the href attribute of the section that was clicked on.
        const href = section.target.getAttribute("href");
        //gets the offsetTop of the section that was clicked on. 
        const offsetTop = document.querySelector(href).offsetTop;

        //scrolls to the section that was clicked on.
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    return(
        <>
            <div class = "header">
                <ul> 
                    <li><a href = "#about-us" onClick={scrollToSelectedSection}>About Us</a></li>
                    <li><a href = "#services" onClick={scrollToSelectedSection}>Services</a></li>
                    <li><a href = "#contact-us" onClick={scrollToSelectedSection}>Contact Us</a></li>
                    <li><a href = "#">Employee Login</a> </li>
                </ul>    
            </div> 
        </>
    )
}