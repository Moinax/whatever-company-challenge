import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h2`
    color: #22A699;
`;

const Excerpt = styled.div`
    line-height: 1.5;
    color: #222;
    p {
        margin: 1.2em 0;
    }
`;

function Story({ className, title, excerpt }) {
    return (
        <li className={className}>
            <Title>{title}</Title>
            <Excerpt dangerouslySetInnerHTML={{ __html : excerpt}} />
        </li>
    );
}
Story.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
};

export default styled(Story)`
    padding: 5px;
    &:nth-child(even){
        background-color: #fafafa;
    }
`;