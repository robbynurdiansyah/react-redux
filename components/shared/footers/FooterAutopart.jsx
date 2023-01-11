import React from 'react';
import Link from 'next/link';

const FooterAutopart = () => (
    <footer className="ps-footer ">
        <div className="container">
            <div className="ps-footer__content">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <aside className="widget widget_footer">
                                    <h4 className="widget-title">
                                        Quick links
                                    </h4>
                                    <ul className="ps-list--link">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/page/about-us">
                                                <a>About Us</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/page/contact-us">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/page/blog">
                                                <a>Blog</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <aside className="widget widget_footer">
                                    <h4 className="widget-title">
                                        Shop Categories
                                    </h4>
                                    <ul className="ps-list--link">
                                        <li>
                                            <Link href="/shop?category=265">
                                                <a>Air Freshener / Perfumes</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop?category=284">
                                                <a>Car Care / Spray</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <aside className="widget widget_footer widget_contact-us">
                                    <h4 className="widget-title">Contact us</h4>
                                    <div className="widget_content">
                                        <p>Call us 24/7</p>
                                        <h3>+971524403261</h3>
                                        <p>
                                            KHF Rocky Trading Co <br />
                                            <a href="admin@crystal-rtc.com">
                                                admin@crystal-rtc.com
                                            </a>
                                        </p>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <aside className="widget widget_newletters">
                            <h4 className="widget-title">Newsletter</h4>
                            <form
                                className="ps-form--newletter"
                                action="#"
                                method="get">
                                <div className="form-group--nest">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                    <button className="ps-btn">
                                        Subscribe
                                    </button>
                                </div>
                                <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google-plus" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram"
                                            href=" https://instagram.com/khf_rocky?igshid=YmMyMTA2M2Y=">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </form>
                        </aside>
                    </div>
                </div>
            </div>
            <div className="ps-footer__copyright">
                <p>© 2022 Crystal-Rtc. All Rights Reserved</p>
                {/* <p>
                    <span>We Using Safe Payment For:</span>
                    <Link href="/page/blank">
                        <a>
                            <img
                                src="/static/img/payment-method/1.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                    <Link href="/page/blank">
                        <a>
                            <img
                                src="/static/img/payment-method/2.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                    <Link href="/page/blank">
                        <a>
                            <img
                                src="/static/img/payment-method/3.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                    <Link href="/page/blank">
                        <a>
                            <img
                                src="/static/img/payment-method/4.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                    <Link href="/page/blank">
                        <a>
                            <img
                                src="/static/img/payment-method/5.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                </p> */}
            </div>
        </div>
    </footer>
);

export default FooterAutopart;
