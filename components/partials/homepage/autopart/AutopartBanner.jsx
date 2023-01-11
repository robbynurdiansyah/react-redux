import React, { Component } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

class AutopartBanner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSettings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <section className="ps-home-banner">
                <Slider {...carouselSettings}>
                    <div className="item">
                        <div
                            className="ps-banner--autopart"
                            style={{
                                backgroundImage: `url(/static/img/slider/autopart/2.jpg)`,
                            }}>
                            {/* <Image
                                src="/static/img/slider/autopart/2.jpg"
                                alt="martfury"
                                width={1920}
                                height={430}
                            /> */}

                            <img
                                src="/static/img/slider/autopart/2.jpg"
                                alt="crtystal Rtc"
                            />
                            <div className="ps-banner__content">
                                <h4>Version 2022</h4>
                                <h3>
                                    Crystal Car <br /> Spray
                                </h3>
                                <p>
                                    New version 2022 with many powerful
                                    features.
                                </p>
                                <Link href="/shop">
                                    <a className="ps-btn">Shop Now</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="ps-banner--autopart"
                            style={{
                                backgroundImage: `url(/static/img/slider/autopart/3.jpg)`,
                            }}>
                            {/* <Image
                                src="/static/img/slider/autopart/3.jpg"
                                alt="martfury"
                                width={1920}
                                height={430}
                            /> */}

                            <img
                                src="/static/img/slider/autopart/3.jpg"
                                alt="crtystal Rtc"
                            />
                            <div className="ps-banner__content">
                                <h4>Version 2022</h4>
                                <h3>
                                    Crystal Car Air
                                    <br /> Freshner
                                </h3>
                                <p>
                                    New version 2022 with many powerful
                                    features.
                                </p>
                                <Link href="/shop">
                                    <a className="ps-btn">Shop Now</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="ps-banner--autopart"
                            style={{
                                backgroundImage:
                                    "url('/static/img/slider/autopart/1.jpg')",
                            }}>
                            {/* <Image
                                src="/static/img/slider/autopart/1.jpg"
                                alt="martfury"
                                width={1920}
                                height={430}
                            /> */}
                            <img
                                src="/static/img/slider/autopart/1.jpg"
                                alt="crtystal Rtc"
                            />
                            <div className="ps-banner__content banner_one">
                                <h4>Version 2022</h4>
                                <h3>
                                    Crystal Car <br /> Perfumes
                                </h3>
                                <p>Perfume Inspired Car Scents</p>

                                <Link href="/shop">
                                    <a className="ps-btn">Shop Now</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        );
    }
}

export default AutopartBanner;
