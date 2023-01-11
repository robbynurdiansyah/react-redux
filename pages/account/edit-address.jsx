import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import EditAddress from '~/wp-components/account/edit-address';

import WPLayout from '~/wp-components/layouts/WPLayout';

const MyAccountPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Edit address',
        },
    ];
    return (
        <WPLayout>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <EditAddress />
            </div>
        </WPLayout>
    );
};

export default MyAccountPage;
