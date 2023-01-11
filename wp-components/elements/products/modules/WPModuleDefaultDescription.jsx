import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Tabs } from 'antd';
import PartialSpecification from '~/components/elements/detail/modules/description/PartialSpecification';
import PartialVendor from '~/components/elements/detail/modules/description/PartialVendor';
import PartialReview from '~/components/elements/detail/modules/description/PartialReview';
import PartialOffer from '~/components/elements/detail/modules/description/PartialOffer';
import { formatCurrency } from '~/utilities/product-helper';

import { WPProductDetailFullDescView } from '~/utilities/WPHelpers';
const { TabPane } = Tabs;

const WPModuleDefaultDescription = ({ product, children, variant }) => {
    // Views
    const fullDescView = WPProductDetailFullDescView(product);

    return (
        <>
            <div className="ps-product__content ps-tab-root">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Description" key="1">
                        {fullDescView}
                    </TabPane>
                    {/* <TabPane tab="Specification" key="2">
        <PartialSpecification />
    </TabPane>
    <TabPane tab="Vendor" key="3">
        <PartialVendor />
    </TabPane> */}
                    {/* <TabPane tab="Reviews (1)" key="4">
        <PartialReview />
    </TabPane> */}
                    {/* <TabPane tab="Questions and Answers" key="5">
        Content of Tab Pane 3
    </TabPane>
    <TabPane tab="More Offers" key="6">
        <PartialOffer />
    </TabPane> */}
                </Tabs>
            </div>
        </>
    );
};

export default WPModuleDefaultDescription;
