import './ContactUs.scss';
function ContactUs() {
    return (
        <div className="contact-us">
            <div className="contact-us-container">
                <div className="contact-us-header">
                    <div className="contact-us-title">Stay Tuned</div>
                </div>
                <hr color="blue" className="hr" />
                <div>
                    <div className="contact-us-sub-title">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-details">
                        <div>
                            Contrary to popular belief, Lorem lpsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </div>
                        <div>
                            <div className="info-container">
                                <img className="contact-details-icon" src="/Images/images/form-house.svg" />
                                <div>
                                    Vestibulum nulla libero, convallis, tincidunt suscipit diam, DC 2002
                                </div>
                            </div>
                            <div className="info-container">
                                <img className="contact-details-icon" src="/Images/images/form-phone.svg" />
                                <div>
                                    +1230 456 789-012 345 6789
                                </div>
                            </div>
                            <div className="info-container">
                                <img className="contact-details-icon" src="/Images/images/form-mail.svg" />
                                <div>
                                    exampledomain@domain.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-container">
                        <input className="item" type="text" placeholder="Name" />
                        <input className="item" type="text" placeholder="Email" />
                        <input className="item" type="text" placeholder="Subject" />
                        <input className="item" type="text" placeholder="Message" />
                        <input type="button" className="button" value="Send Message" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;