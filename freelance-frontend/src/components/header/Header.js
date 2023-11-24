import "./Header.css"

export default function Header() {
    //JSX code for the header of the webpage.
    return(
        <>
            <div class = "header">
                <ul> 
                    <li><a href = "#about-us">About Us</a></li>
                    <li><a href = "#services">Services</a></li>
                    <li><a href = "#">Contact Us</a></li>
                    <li><a href = "#">Employee Login</a> </li>
                </ul>    
            </div> 
        </>
    )
}