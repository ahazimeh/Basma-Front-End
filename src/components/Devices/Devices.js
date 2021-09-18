import './Devices.scss';
function Devices() {
    return (
        <div className="devices">
            <div className="devices-content-container">
                <div className="devices-title">
                    BASMA is avialable for all devices
                </div>
                <div className="devices-title-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className="google-play-app-store">
                <img className="img1" src="/Images/images/google-play.png" />
                <img className="img2" src="/Images/images/google-play.png" />
            </div>
            <li className="availability">Available on IPhone, IPad and all Android devices</li>
        </div>
    )
}
export default Devices;