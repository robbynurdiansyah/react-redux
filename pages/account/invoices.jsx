import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Invoices from '~/wp-components/account/invoices';
import WPLayout from '~/wp-components/layouts/WPLayout';

const MyAccountPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Invoices',
        },
    ];
    return (
        <WPLayout>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Invoices />
            </div>
        </WPLayout>
    );
};

export default MyAccountPage;
