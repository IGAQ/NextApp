import styled from 'styled-components';

const ABCoutside = styled.select`

`;

const Single = styled.option`

`;

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

export function ABCSelect() {
    return (
        <ABCoutside>
            {
                alphabet.map((letter) => {
                    <Single>{letter}</Single>;
                })
            }
        </ABCoutside>
    );
}