import './ChallengeTips.scss';
function ChallengeTips() {
    return (
        <>
            <div className="challenge-tips">
                <div className="challenge-tips-header">
                    <p className="challenge-tips-title">Code Challenge</p>
                    <p className="challenge-tips-sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="challenge-tips-body-wrapper">
                    <div className="challenge-tips-body">
                        <div className="challenge-tips-body-element">
                            <div className="flex">
                                <div>
                                    <img src="/Images/images/download.png" />
                                    <p>Install the App</p>
                                    <p>dsadasd sdfsd fssd sdf sd</p>
                                </div>
                                <div>
                                    <img className="arrow" src="/svg/arrow-right.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="challenge-tips-body-element">
                            <div className="flex">
                                <div>
                                    <img src="/Images/images/settings.png" />
                                    <p>Install the App</p>
                                    <p>dsadasd sdfsd fssd sdf sd</p>
                                </div>
                                <div>
                                    <img className="arrow" src="/svg/arrow-right.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="challenge-tips-body-element">
                            <img src="/Images/images/app.png" />
                            <p>Install the App</p>
                            <p>dsadasd sdfsd fssd sdf sd</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChallengeTips;