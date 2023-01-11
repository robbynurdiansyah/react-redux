import React from 'react';
import WPBlogGrid from '~/wp-components/blog/WPBlogGrid';
import WPLayout from '~/wp-components/layouts/WPLayout';
import BreadCrumb from '~/components/elements/BreadCrumb';

const BlogGridPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Blog',
        },
    ];

    return (
        <WPLayout title="Blog">
            <div className="ps-page--single">
                <div className="inner-bg">
                    <h1>Blog</h1>
                </div>
                <BreadCrumb breacrumb={breadCrumb} />
            </div>
            <div className="ps-page--blog">
                <div className="container">
                    <WPBlogGrid />
                </div>
            </div>
        </WPLayout>
    );
};

export default BlogGridPage;
