import './Subscribe.scss';
function Subscribe() {
    return (
        <div className="subscribe">
            <img className="newsletter" src="/Images/images/newsletter-background.png" />
            <div className="subscribe-content">
                <p className="subscribe-content-title">Subscribe to get updates</p>
                <p>By subscribing you will get newsleter, promotions adipisicing elit. Architecto beatae, asperiores tempore repudiandae saepe aspernature unde volupate sapiente quia ex.</p>
                <input className="input" type="text" placeholder="Enter your email" />
                <input type="button" className="button" value="Get Started" />

            </div>
        </div>
    )
}
export default Subscribe;