import React, { useEffect } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { getCart } from '~/store/cart/action';
import { connect, useDispatch } from 'react-redux';
import WPLayout from '~/wp-components/layouts/WPLayout';
import WPFormCheckout from '~/wp-components/shared/forms/WPFormCheckout';

import { useRouter } from 'next/router';
const CheckoutSuccessPage = () => {
    const router = useRouter();
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
            url: '/account/shopping-cart',
        },
        {
            text: 'Order Success',
        },
    ];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <WPLayout title="Checkout">
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-checkout ps-section--shopping">
                    <div className="container">
                        <div className="ps-section__header">
                            <h1>Checkout Success</h1>
                            <p>
                                Thank you{' '}
                                <strong>
                                    Mr/Ms. {router.query.name}{' '}
                                    {router.query.lastName}.
                                </strong>{' '}
                                Your order has been received
                            </p>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{router.query.name}</td>
                                        <td> {router.query.address}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </WPLayout>
    );
};

export default connect()(CheckoutSuccessPage);
