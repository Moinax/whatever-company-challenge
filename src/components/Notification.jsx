import styled from 'styled-components';

export default styled.p`
    padding: 5px;
    border: 1px dashed ${props => props.isError ? 'red' : 'lightgrey'};
    color: ${props => props.isError ? 'red' : 'black'};
`;