import styled from 'styled-components';
import {Text} from '../../Text';
import {Spacer} from '../../Spacer';

const HelpDiv = styled.div`
  padding: 2em 1em 7em 2em;
  background-color: white;
  height: 7.5rem;
  width: 22.5rem;
  border-radius: 10px;
  border: 1px solid #D2D2D2;
`;

export function HelpButton({
    headingtext = 'heading',
    descriptiontext = 'Placeholder',
}) {
    return (
        <HelpDiv>
            <Text text={headingtext} weight='600' size='1.3rem'></Text>
            <Spacer axis='vertical' size={15}/>
            <Text text={descriptiontext} size='0.9rem'></Text>
        </HelpDiv>
    );
}
