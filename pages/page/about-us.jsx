import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import AboutInner from '~/components/partials/page/about-us/AboutInner';
import WPLayout from '~/wp-components/layouts/WPLayout';

const AboutUsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'About Us',
        },
    ];
    return (
        <WPLayout title="About us">
            <div className="ps-page--single">
                <div className="inner-bg">
                    <h1>About Us</h1>
                </div>
                <BreadCrumb breacrumb={breadCrumb} />
                <AboutInner />
            </div>
        </WPLayout>
    );
};
export default AboutUsPage;
