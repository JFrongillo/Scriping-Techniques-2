import "./Header.css"

export default function Header() {
    return(
        <>
            <div className="header">
                <div className="headerTitles">
                    <span className="headerTitleSm">Freelance</span>
                    <span className="headerTitleLg">Blog</span>
                </div>
                <img className="headerImg" src="https://unsplash.com/photos/q2dUSl9S4Xg" alt="" />
            </div>
        </>
    )
}