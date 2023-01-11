import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ServiceIn from '~/components/partials/page/service-page/ServiceIn';
import WPLayout from '~/wp-components/layouts/WPLayout';

const ServicePage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Our Products',
        },
    ];
    return (
        <WPLayout title="Services">
            <div className="ps-page--single">
                <div className="inner-bg">
                    <h1>Our Products</h1>
                </div>
                <BreadCrumb breacrumb={breadCrumb} />
                <ServiceIn />
            </div>
        </WPLayout>
    );
};
export default ServicePage;
