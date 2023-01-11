import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { getProductsByCategory } from '~/store/product/action';
import { WPGetProducts } from '~/store/wp/action';
import ShopBanner from '~/components/partials/shop/ShopBanner';
import ShopCategories from '~/components/partials/shop/ShopCategories';
import ShopBrands from '~/components/partials/shop/ShopBrands';
import WPWidgetCategories from '~/wp-components/shop/WPWidgetCategories';
import WPWidgetBrand from '~/wp-components/shop/WPWidgetBrand';
import WPWidgetFilterByPrices from '~/wp-components/shop/WPWidgetFilterByPrices';
import WPShopProducts from '~/wp-components/shop/WPShopProducts';
import WPProductRepository from '~/repositories/WP/WPProductRepository';
import WPLayoutFullwidth from '~/wp-components/layouts/WPLayoutFullwidth';
import WPShopCategories from '~/wp-components/shop/WPShopCategories';

const WPShopPage = ({ query }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [categoryName, setCategoryName] = useState(null);
    const pid = query.category;

    if (pid !== '' && isNaN(parseInt(pid)) === false) {
        const queries = {
            page: 1,
            per_page: 18,
            category: pid,
        };
        dispatch(WPGetProducts(queries));
        getCategory(pid);
    } else {
        const queries = {
            page: 1,
            per_page: 18,
        };
        dispatch(WPGetProducts(queries));
    }

    async function getCategory(id) {
        const category = await WPProductRepository.getCategoryByID(id);
        if (category) {
            setCategoryName(category.name);
            return category;
        } else {
            return null;
        }
    }

    async function getProductOnChangeURL(url) {
        const nextPid = url.split('category=').pop();
        if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
            const queries = {
                page: 1,
                per_page: 18,
                category: nextPid,
            };
            dispatch(WPGetProducts(queries));
            getCategory(nextPid);
        } else {
            const queries = {
                page: 1,
                per_page: 18,
            };
            dispatch(WPGetProducts(queries));
        }
    }

    async function getProductOnChangeComplete(url) {
        const nextPid = url.split('category=').pop();
        if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
            const queries = {
                page: 1,
                per_page: 18,
                category: nextPid,
            };
            dispatch(WPGetProducts(queries));
            getCategory(nextPid);
        } else {
            const queries = {
                page: 1,
                per_page: 18,
            };
            dispatch(WPGetProducts(queries));
        }
    }

    useEffect(() => {
        if (query) {
            const queries = {
                page: 1,
                per_page: 18,
            };
            dispatch(WPGetProducts(queries));

            if (query.category) {
                dispatch(getProductsByCategory(query.category));
                getCategory(query.category);
            } else {
            }
        }

        router.events.on('routeChangeComplete', getProductOnChangeComplete);

        return () => {
            router.events.on('routeChangeComplete', getProductOnChangeComplete);
        };
    }, [dispatch]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: categoryName ? (
                <span
                    dangerouslySetInnerHTML={{
                        __html: `${categoryName}`,
                    }}
                />
            ) : (
                'Shop'
            ),
        },
    ];

    return (
        <WPLayoutFullwidth title="Shop">
            <div className="ps-page--shop">
                <div className="ps-page--single">
                    <div className="inner-bg">
                        <h1>Shop</h1>
                    </div>
                    <BreadCrumb breacrumb={breadCrumb} />
                </div>

                <div className="ps-container">
                    <ShopBanner />
                    <ShopBrands />
                    <WPShopCategories />
                    <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            <WPWidgetCategories
                                activeID={query && query.category}
                            />
                            <WPWidgetBrand />
                            <WPWidgetFilterByPrices />
                        </div>
                        <div className="ps-layout__right">
                            <WPShopProducts />
                        </div>
                    </div>
                </div>
            </div>
        </WPLayoutFullwidth>
    );
};

WPShopPage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default connect()(WPShopPage);
