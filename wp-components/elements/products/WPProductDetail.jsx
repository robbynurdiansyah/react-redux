import React, { useEffect, useState } from 'react';
import DefaultDescription from '~/components/elements/detail/modules/description/DefaultDescription';
import WPModuleProductDetailThumbnail from '~/wp-components/elements/products/modules/WPModuleProductDetailThumbnail';
import WPModuleProductDetailInformation from '~/wp-components/elements/products/modules/WPModuleProductDetailInformation';
import WPModuleDefaultDescription from '~/wp-components/elements/products/modules/WPModuleDefaultDescription';
import { WPProductDetailFullDescView } from '~/utilities/WPHelpers';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const WPProductDetail = ({ product, variations }) => {
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const handleGetVariant = () => {
        const WPSelectedVariant = variations.find((item) => {
            return item.attributes.some(
                (item) =>
                    item.name === 'color' &&
                    item.option.toLowerCase() === selectedColor
            );
        });
        setSelectedVariant(WPSelectedVariant);
        return WPSelectedVariant;
    };

    const handleChangeColor = (newColor) => {
        if (newColor !== selectedColor) {
            setSelectedColor(newColor);
            handleGetVariant();
        }
    };

    function handleChangeSize(newSize) {
        if (newSize !== selectedSize) {
            setSelectedSize(newSize.toLowerCase());
        }
    }

    function init() {
        if (variations) {
            if (!selectedColor) {
                setSelectedColor(
                    product.default_attributes.find(
                        (item) => item.name === 'color'
                    ).option
                );
            }
            if (!selectedSize) {
                setSelectedSize(
                    product.default_attributes.find(
                        (item) => item.name === 'size'
                    ).option
                );
            }

            if (selectedColor !== null) {
                handleGetVariant();
            }
        }
    }

    useEffect(() => {
        init();
    }, [init]);

    // Views
    const fullDescView = WPProductDetailFullDescView(product);
    let colorsView, sizesView;

    if (product) {
        if (variations) {
            const WPProductSizes = product.attributes.find(
                (item) => item.name === 'size'
            );
            const WPProductColors = product.attributes.find(
                (item) => item.name === 'color'
            );
            if (WPProductColors) {
                const colorItems = WPProductColors.options.map((item) => (
                    <div
                        className={`ps-variant ps-variant--color ${
                            selectedColor === item && 'active'
                        }`}
                        onClick={(e) => handleChangeColor(item)}
                        style={{ backgroundColor: item }}
                        key={item.id}>
                        <span className="ps-variant__tooltip text-capitalize">
                            {item}
                        </span>
                    </div>
                ));

                colorsView = (
                    <div className="ps-product__variations">
                        <figure>
                            <figcaption>Colors</figcaption>
                            {colorItems}
                        </figure>
                    </div>
                );
            } else {
                colorsView = <p>Color not found.</p>;
            }

            if (WPProductSizes) {
                const sizeItems = WPProductSizes.options.map((item) => (
                    <div
                        className={`ps-variant ps-variant--size ${
                            selectedSize === item.toLowerCase() && 'active'
                        }`}
                        onClick={(e) => handleChangeSize(item)}>
                        <span className="ps-variant__size text-uppercase">
                            {item}
                        </span>
                    </div>
                ));
                sizesView = (
                    <div className="ps-product__variations">
                        <figure>
                            <figcaption>
                                Size: <strong> Choose an option</strong>
                            </figcaption>
                            {sizeItems}
                        </figure>
                    </div>
                );
            } else {
                sizesView = <p>Size not found.</p>;
            }
        }
    }

    if (!variations) {
        return (
            <div className="ps-product--detail ps-product--fullwidth">
                <div className="ps-product__header">
                    <WPModuleProductDetailThumbnail product={product} />
                    <WPModuleProductDetailInformation product={product} />
                </div>
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
            </div>
        );
    } else {
        return (
            <div className="ps-product--detail ps-product--fullwidth">
                <div className="ps-product__header">
                    <WPModuleProductDetailThumbnail
                        product={product}
                        variant={selectedVariant}
                    />
                    <WPModuleProductDetailInformation
                        product={product}
                        variant={selectedVariant && selectedVariant}>
                        {colorsView}
                        {sizesView}
                    </WPModuleProductDetailInformation>
                </div>
                <DefaultDescription />
            </div>
        );
    }
};
export default WPProductDetail;
