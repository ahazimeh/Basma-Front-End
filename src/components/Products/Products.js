import './Products.scss';
function Products() {
    return (
        <div className="products">
            <div className="products-header">
                <span className="products-title">Basma Code Challenge</span>
            </div>
            <hr color="blue" className="hr" />
            <div className="products-header-sub">
                <span className="products-sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis</span>
            </div>
            <div className="items">
                <div className="single-item">
                    <div className="single-item-container">
                        <div className="img-container">
                            <img className="single-item-img" src="/Images/images/bike.png" />
                        </div>
                        <div className="package-type"><span>Basic</span></div>
                        <div className="price-wrapper">
                            <div className="price">$<span>49</span></div>
                        </div>
                        <div className="center">
                            <div className="hr-wrapper"><hr /></div>
                            <div>5GB Linux Web Space</div>
                            <div className="hr-wrapper"><hr /></div>
                            <div>5 MySQL Database</div>
                            <div className="hr-wrapper"><hr /></div>
                            <div>24/7 Tech Support</div>
                            <div className="hr-wrapper"><hr /></div>
                            <div>Daily Backups</div>
                            <div className="hr-wrapper"><hr /></div>
                            <div className="btn-container">
                                <div className="cart-button pos">
                                    <input type="button" value="Sign Up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-item">
                    <div className="single-item-container">
                        <div className="img-container">
                            <img className="single-item-img" src="/Images/images/motorbike.png" />
                        </div>
                        <div className="package-type"><span>PRO</span></div>
                        <div className="price-wrapper">
                            <div className="price">$<span>129</span></div>
                        </div>
                        <div className="center">
                            <div className="hr-wrapper"><hr /></div>
                            <div>10GB Linux Web Space</div>
                            <div className="hr-wrapper"><hr /></div>
                            <div>50 MySQL Database</div>
                            <div className="hr-wrapper"><hr /></div>
                            <div>Unlimited Email</div>
                            <div className="hr-wrapper"><hr /></div>
                            <div>Daily Backups</div>
                            <div className="hr-wrapper"><hr /></div>
                            <div className="btn-container">
                                <div className="cart-button pos">
                                    <input type="button" value="Sign Up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-us">
                <div>Not sure what to choose? <span>Contact Us</span></div>
            </div>
        </div>
    )
}
export default Products;