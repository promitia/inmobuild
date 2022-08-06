const Header = () => {
    return (
        <header className="header">
            <div className="header__navbox">
                <div className="header__logo">
                    <img src="./Logo.png" alt="Promitia" width={112} height={35}/>
                </div>
                <div className="link_container">
                    <ul>
                        <a href="#">ABOUT US</a>
                    </ul>
                    <ul>
                        <a href="#">SERVICES</a>
                    </ul>
                    <ul>
                        <a href="#">OUR WORK</a>
                    </ul>
                    <ul>
                        <a href="#">TECHNOLOGY</a>
                    </ul>
                    <ul>
                        <a href="#">BLOG</a>
                    </ul>
                    <ul>
                        <a href="#">CONTACT</a>
                    </ul>
                    <ul>
                        <a href="https://api.whatsapp.com/send?phone=51981485983" target="_blank">+51 981 485 983</a>
                    </ul>
                </div>
            </div>
        </header>
    )
}


export default Header;