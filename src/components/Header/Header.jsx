const Header = () => {
    return (
        <header className="header">
            <div className="header__navbox">
                <div className="link_container">
                    <img className="header__logo" src="./Logo.png" alt="Promitia" width={112} height={35}/>
                    <ul>
                        <a href="#">BUY</a>
                    </ul>
                    <ul>
                        <a href="#">SELL</a>
                    </ul>
                    <ul>
                        <a href="#">MANAGE</a>
                    </ul>
                    <ul>
                        <a href="#">INSTITUTIONS</a>
                    </ul>
                </div>
                <div className="link_containerRight">
                    <ul>
                        <a href="#">LEARN</a>
                    </ul>
                    <ul>
                        <a href="#">ABOUT US</a>
                    </ul>
                    <ul>
                        <a href="#">TOOLS & CALCULATORS</a>
                    </ul>
                    <ul>
                        <a className="login" href="#">LOG IN</a>
                    </ul>
                    <ul>
                        <a className="signup" href="#">SIGN UP</a>
                    </ul>
                </div>
            </div>
        </header>
    )
}


export default Header;