import React, { Component } from 'react';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

import PartialDescription from './PartialDescription';
import PartialReview from './PartialReview';

class DefaultDescription extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="ps-product__content ps-tab-root">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Description" key="1">
                            <PartialDescription />
                        </TabPane>

                        <TabPane tab="Reviews (1)" key="4">
                            <PartialReview />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default DefaultDescription;
