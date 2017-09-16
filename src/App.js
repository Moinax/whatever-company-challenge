import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { debounce } from 'lodash/function';
import styled from 'styled-components';

import SearchInput from './components/SearchInput';
import Stories from './components/Stories';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'https://qwmk4njvp.lp.gql.zone/graphql',
    }),
});

const Title = styled.h1`
    text-transform: uppercase;
`;
class App extends Component {
    static propTypes = {
        className: PropTypes.string.isRequired
    }
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.search = debounce(this.search, 500);
        this.state = {
            query: ''
        };
    }
    handleSearch(event) {
        this.search(event.target.value);
    }
    search(query) {
        this.setState({ query});
    }
    render() {
        const { className } = this.props;
        const { query } = this.state;
        return (
            <div className={className}>
                <ApolloProvider client={client}>
                    <div>
                        <Title>Whatever Company - Challenge</Title>
                        <SearchInput type="search" name="query" placeholder="Search a story" onChange={this.handleSearch} />
                        <Stories queryString={query} />
                    </div>
                </ApolloProvider>
            </div>
        );
    }
}

const StyledApp = styled(App)`
    font-family: 'Lato', sans-serif;;
`;
export default StyledApp;
