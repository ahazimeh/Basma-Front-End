import './HeaderContainer.scss';
function HeaderContainer() {
    return (<div className="header-container">
        <div className="left">
            <div className="abs">
                <div className="title">
                    Creative way to showcase your App
                </div>
                <div className="sub-title">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <input type="button" className="button" value="Get Started" />
                </div>
            </div>
        </div>
        <div className="right">
            <div class="box"></div>
            <img className="clip-phone" src="/Images/images/thumb-1.png" />
            <div className="nav-bar">
                <div className="padding">aaaaaaaaaaaaa</div>
                <div>Home</div>
                <div>Features</div>
                <div>Pages</div>
                <div>Screenshots</div>
                <div>Pricing</div>
                <div>Contact</div>
            </div>
        </div>
    </div>)
}
export default HeaderContainer;