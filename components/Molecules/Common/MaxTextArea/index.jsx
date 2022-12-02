import styled from 'styled-components';
import {Text} from '../../../Atoms/Common/Text';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {FlexBox} from '../../../../styles/globals';
import { ModalAlert } from '../../../Organisms/Common/Modals/ModalAlert';

const Area = styled.textarea`
  font-size: 1rem;
  padding: 10px 10px 10px 15px;
  margin: 0;
  font-family: 'Heebo', sans-serif;
  border-radius: 6px;
  border-bottom: ${props => props.borderBottom || ' 2px solid #ffb6c3'};

  &:focus {
    box-shadow: ${props => props.boxShadow || '0 0 2px 2px #C23950'};
    outline: none;
    border-bottom: 2px solid #C2395000;
  }
`;

export function MaxTextArea({
    text,
    maxLength = '250',
    name = 'name',
    label = 'label',
    rows = '5',
    placeholder = 'placeholder',
    onChange,
    boxShadow = '0 0 2px 2px #C23950',
    borderBottom = '2px solid #ffb6c3',
}) {
    const max = maxLength;
    const tooLong = '';

    const handleChange = (e) => {
        const {value} = e.target;
        onChange(e);
        if (value.length > max) {
            //Change this to a toast message
            <ModalAlert text={tooLong} />;
        }
    };

    return (
        <>
            <FlexBox align="stretch">
                <label htmlFor={name}> {label}</label>
                <Area required boxShadow={boxShadow} borderBottom={borderBottom} rows={rows} name={name}
                    placeholder={placeholder} value={text} onChange={handleChange}/>
            </FlexBox>
            <Spacer axis="vertical" size={10}/>
            <Text size="0.75rem" text={max - text.length + ' characters left'}/>
            <Text size="1rem" text={tooLong}/>
        </>
    );
}