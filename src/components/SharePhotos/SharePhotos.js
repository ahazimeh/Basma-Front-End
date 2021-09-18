import './SharePhotos.scss';
function SharePhotos() {
    return (
        <div className="share-photos">
            <div className="share-photos-left-section">
                <div className="share-title">Share your photos with friends easily</div>
                <div>
                    <p className="share-photo-content">
                        <img src="/svg/cart.svg" />
                        Fully layered dolor sit amet, consectetur elit. Facere, nobis, id expedita dolores officiis laboriosam.
                    </p>
                    <p className="share-photo-content">
                        <img src="/svg/cart.svg" />
                        Customizable design dolor sit amet, consectetur adipisicing eli, nobis, id expedita dolores officiis la.
                    </p>
                    <p className="share-photo-content">
                        <img src="/svg/cart.svg" />
                        Fully layered dolor sit amet, consectetur elit. Facere, nobis, id expedita dolores officiis laboriosam.
                    </p>
                    <p className="share-photo-content">
                        <img src="/svg/cart.svg" />
                        Marketing chart dolor sit amet, consecetetur adipisicing elit. Facere, nobis, id expedita dolores officiis, laboriosam.
                    </p>
                </div>

                <input type="button" className="button" value="Get Started" />

            </div>
            <div className="share-phone">
                <img src="/Images/images/thumb-2.png" />
            </div>
        </div>
    )
}
export default SharePhotos;