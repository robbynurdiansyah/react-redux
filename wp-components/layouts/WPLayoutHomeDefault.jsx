import React from 'react';
import Head from 'next/head';
import FooterAutopart from '~/components/shared/footers/FooterAutopart';
import SwicherDemo from '~/components/shared/switcher-demo/SwitcherDemo';

import WPHeaderDefault from '~/wp-components/shared/headers/WPHeaderDefault';
import WPHeaderMobile from '~/wp-components/shared/mobile/WPHeaderMobile';
import WPNavigationBottom from '~/wp-components/shared/mobile/WPNavigationBottom';

const WPLayoutHomeDefault = ({ children, title }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <div className="martfury">
            <Head>
                <title>{titleView}</title>
            </Head>
            <WPHeaderDefault />
            <WPHeaderMobile />
            <WPNavigationBottom />
            <main id="homepage-1">{children}</main>
            <FooterAutopart />
            {/*<SwicherDemo />*/}
            {/*<SubscribePopup active={subscribe} />*/}
        </div>
    );
};

export default WPLayoutHomeDefault;
