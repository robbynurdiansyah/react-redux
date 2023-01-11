import React, { Component } from 'react';
import { Select } from 'antd';
import Link from 'next/link';
import Router from 'next/router';

import ProductResult from '../../../elements/products/ProductSearchResult';
import { connect } from 'react-redux';
import { getProductsByKeyword } from '../../../../store/product/action';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPanel: false,
            keyword: '',
        };
    }

    searchByProductName = (keyword, object) => {
        let matches = [];
        let regexp = new RegExp(keyword.toLowerCase(), 'g');

        object.forEach((product) => {
            if (product.title.toLowerCase().match(regexp))
                matches.push(product);
        });

        return matches;
    };

    handleSearch(e) {
        if (e.target.value !== '') {
            const keyword = e.target.value;
            this.props.dispatch(getProductsByKeyword(keyword));
            this.setState({
                searchPanel: true,
                keyword: e.target.value,
            });
        } else {
            this.setState({ searchPanel: false, searchProducts: [] });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const keyword = this.state.keyword;
        Router.push(`/search?keyword=${keyword}`);
    }

    render() {
        const { searchPanel } = this.state;
        const { searchResults } = this.props;
        const exampleCategories = [
            'All',
            'Car Paint',
            'Car Wash',
            'Car Spray',
            'Car Wax',
            ' Car Services',
        ];
        return (
            <form
                className="ps-form--quick-search"
                method="get"
                action="/"
                onSubmit={this.handleSubmit.bind(this)}>
                <div className="ps-form__categories">
                    <select className="form-control">
                        {exampleCategories.map((option) => (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <input
                    className="form-control"
                    type="text"
                    placeholder="I'm shopping for..."
                    onChange={this.handleSearch.bind(this)}
                />
                <button onClick={this.handleSubmit.bind(this)}>Search</button>
                <div
                    className={`ps-panel--search-result${
                        searchPanel && searchPanel === true ? ' active ' : ''
                    }`}>
                    <div className="ps-panel__content">
                        {searchResults && searchResults.length > 0 ? (
                            searchResults.map((product) => (
                                <ProductResult
                                    product={product}
                                    key={product.id}
                                />
                            ))
                        ) : (
                            <span>Not found! Try with another keyword.</span>
                        )}
                    </div>
                    <div className="ps-panel__footer text-center">
                        <Link href="/search">
                            <a>See all results</a>
                        </Link>
                    </div>
                </div>
            </form>
        );
    }
}

export default connect((state) => state.product)(SearchHeader);
