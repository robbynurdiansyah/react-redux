import React from 'react';

const SiteFeatures = () => (
    <section className="ps-site-features">
        <div className="container">
            <div className="ps-block--site-features ps-block--site-features-2">
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-rocket"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Free Delivery</h4>
                        <p>For all oders over د.إ40.00</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-sync"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>10 Days Return</h4>
                        <p>If Product have problems</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-credit-card"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Secure Payment</h4>
                        <p>100% secure payment</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-bubbles"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>24/7 Support</h4>
                        <p>Dedicated support</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SiteFeatures;
