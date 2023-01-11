import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import AutopartBanner from '~/components/partials/homepage/autopart/AutopartBanner';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import AutoAbout from '~/components/partials/homepage/autopart/AutoAbout';
import AutopartBestSaleBrand from '~/components/partials/homepage/autopart/AutopartBestSaleBrand';
import Newletters from '~/components/partials/commons/Newletters';
import HomeBottom from '~/components/partials/homepage/autopart/HomeBottom';
import WPLayoutHomeDefault from '~/wp-components/layouts/WPLayoutHomeDefault';
import AutopartPromotions2 from '~/components/partials/homepage/autopart/AutopartPromotions2';
import ClientSay from '~/components/partials/commons/ClientSay';
import { getCollections } from '~/store/collection/action';
import WPNewArrivals from '~/wp-components/homepage/WPNewArrivals';

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const collectionsSlug = [
            'deal-of-the-day',
            'consumer-electronics',
            'clothings',
            'garden-and-kitchen',
            'new-arrivals-products',
            'fullwidth-consumer-electronic-best-seller',
            'fullwidth-consumer-electronic-most-popular',
            'fullwidth-clothing-best-sellers',
            'fullwidth-clothing-most-popular',
            'fullwidth-kitchen-most-popular',
            'fullwidth-kitchen-best-sellers',
        ];
        const bannerSlugs = ['banner-home-fullwidth'];
        const promotionSlugs = ['home_fullwidth_promotions'];
        dispatch(getCollections(collectionsSlug));
    }, []);
    return (
        <WPLayoutHomeDefault title="Crystal RTC">
            <AutopartBanner />
            <AutopartPromotions2 />
            <WPNewArrivals />
            <HomeBottom />
            <SiteFeatures />
        </WPLayoutHomeDefault>
    );
};

export default connect()(Index);
