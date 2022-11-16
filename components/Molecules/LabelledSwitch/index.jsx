import {FlexBox} from '../../../styles/globals';
import {StyledSwitch} from '../../Atoms/Switch';
import {Text} from '../../Atoms/Text';
import {Spacer} from '../../Atoms/Spacer';

export function LabelledSwitch({
    checked,
    setChecked,
    label = 'label',
}) {
    return (
        <FlexBox dir="row">
            <Text text={label} size="1rem"></Text>
            <Spacer width="50px"/>
            <StyledSwitch checked={checked} setChecked={setChecked}/>
        </FlexBox>
    );
}