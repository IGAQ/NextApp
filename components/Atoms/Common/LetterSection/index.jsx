import styled from 'styled-components';

const LetterDiv = styled.div`
    background-color: #f2f2f2;
    border-radius: 50%;
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
    height: 2.5rem;
    line-height: 2.5rem;
    margin: 0 0.5rem 0 0;
    text-align: center;
    width: 2.5rem;
`;

export default function LetterSection(props) {
    const { letter } = props;
    return <LetterDiv>{letter}</LetterDiv>;
}