import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';

import Story from './Story';
import Notification from './Notification';

class Stories extends Component {
    static propTypes = {
        className: PropTypes.string.isRequired,
        queryString: PropTypes.string,
        data: PropTypes.shape({
            loading: PropTypes.bool.isRequired,
            error: PropTypes.shape({
                message: PropTypes.string.isRequired
            }),
            viewer: PropTypes.shape({
                stories: PropTypes.shape({
                    edges: PropTypes.arrayOf(PropTypes.shape({
                        node: PropTypes.shape({
                            id: PropTypes.string.isRequired,
                            title: PropTypes.string.isRequired,
                            excerpt: PropTypes.string,
                        })
                    }))
                })
            })
        }).isRequired
    }
    render() {
        const { data, className } = this.props;
        if (data.loading) {
            return <Notification>Loading...</Notification>;
        }
        if (data.error) {
            return <Notification isError>{data.error.message}</Notification>;
        }
        if (data.viewer.stories.edges.length === 0) {
            return <Notification>No stories found</Notification>
        }
        return (
            <ul className={className}>
                {data.viewer.stories.edges.map((story) => (
                    <Story {...story.node} key={story.node.id}/>
                ))}
            </ul>
        );
    }
}

const StyledStories = styled(Stories)`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const storiesQuery = gql`
    query StoriesQuery($queryString: String) {
        viewer {
            stories(queryString: $queryString) {
                edges {
                    node {
                        id
                        ... on Story {
                            id
                            title
                            excerpt
                        }
                    }
                }
            }
        }
    }
`;

export default graphql(storiesQuery)(StyledStories);