import React, { Component } from 'react';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

import PartialDescription from './PartialDescription';
import PartialReview from './PartialReview';

class DescriptionBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ps-product__box">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Description" key="1">
                        <PartialDescription />
                    </TabPane>

                    <TabPane tab="Reviews (1)" key="4">
                        <PartialReview />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default DescriptionBox;
