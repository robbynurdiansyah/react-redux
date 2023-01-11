import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer">
            <h4 className="widget-title">Quick links</h4>
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
        <aside className="widget widget_footer">
            <h4 className="widget-title">Shop Categories</h4>
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
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contact us</h4>
            <div className="widget_content">
                <p>Call us 24/7</p>
                <h3>+971524403261</h3>
                <p>
                    KHF Rocky Trading Co <br />
                    <a href="admin@crystal-rtc.com">admin@crystal-rtc.com</a>
                </p>
            </div>
        </aside>

        <aside className="widget widget_newletters">
            <h4 className="widget-title">Newsletter</h4>
            <form className="ps-form--newletter" action="#" method="get">
                <div className="form-group--nest">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Email Address"
                    />
                    <button className="ps-btn">Subscribe</button>
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
);

export default FooterWidgets;
