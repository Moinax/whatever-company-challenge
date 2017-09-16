import styled from 'styled-components';

const textColor = 'white';

export default styled.input`
    height: 50px;
    padding: 5px;
    border: 1px solid black;
    background-color: #00bcd4;
    color: ${textColor};
    width: 100%;
    font-size: 30px;
    box-shadow: 3px 3px 3px grey;
    outline: none;
    &::placeholder {
        color: ${textColor};
        opacity: .5;
    }
`;