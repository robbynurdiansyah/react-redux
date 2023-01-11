import React from 'react';

const AutoAbout = () => (
    <>
        <section id="about" class="about">
            <div class="container aos-init aos-animate" data-aos="fade-up">
                <div class="row">
                    <div
                        class="col-lg-6 order-1 order-lg-2 aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-delay="100">
                        <img
                            src="/static/img/about-home.jpg"
                            class="img-fluid"
                            alt=""
                        />
                    </div>
                    <div
                        class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-delay="100">
                        <h3>ABOUT CRYSTAL</h3>
                        <div class="content1">
                            <h2 class="text-red">10</h2>
                            <strong>
                                Everything you need to build an amazing
                                dealership automotive responsive website.
                            </strong>
                            <p>
                                Car Dealer is the best premium WordPress Theme.
                                We provide everything you need to build an{' '}
                                <b>Amazing dealership website</b> developed
                                especially for car sellers, dealers or auto
                                motor retailers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section id="icon-box" class="icons">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="icon-1">
                            <div class="icon-left">
                                <i class="fa fa-car" aria-hidden="true"></i>
                            </div>
                            <div class="icon-right">
                                <h6>All brands</h6>
                                <p>More than 100 brands</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="icon-1">
                            <div class="icon-left">
                                <i
                                    class="fa fa-comments-o"
                                    aria-hidden="true"></i>
                            </div>
                            <div class="icon-right">
                                <h6>FREE SUPPORT</h6>
                                <p>Premium and 24/7</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="icon-1">
                            <div class="icon-left">
                                <i class="fa fa-key" aria-hidden="true"></i>
                            </div>
                            <div class="icon-right">
                                <h6>DEALERSHIP</h6>
                                <p>Single or multiple</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="icon-1">
                            <div class="icon-left">
                                <i class="fa fa-money" aria-hidden="true"></i>
                            </div>
                            <div class="icon-right">
                                <h6>AFFORDABLE</h6>
                                <p>Best suitable price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  */}
        <section id="features" class="features">
            <div class="container aos-init aos-animate" data-aos="fade-up">
                <div class="row">
                    <div
                        class="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate"
                        data-aos="zoom-in"
                        data-aos-delay="100">
                        <img
                            src="/static/img/car2.png"
                            class="img-fluid"
                            alt=""
                        />
                    </div>
                    <div
                        class="col-lg-4 col-md-6 text-center aos-init aos-animate"
                        data-aos="zoom-in"
                        data-aos-delay="100">
                        <p>Have any question ?</p>
                        <h2 class="text-red">(007) 123 456 7890</h2>
                    </div>
                    <div
                        class="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate"
                        data-aos="zoom-in"
                        data-aos-delay="100">
                        <img
                            src="/static/img/car3.png"
                            class="img-fluid"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default AutoAbout;
