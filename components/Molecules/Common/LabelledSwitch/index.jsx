import {FlexBox} from '../../../../styles/globals';
import {StyledSwitch} from '../../../Atoms/Common/Switch';
import {Text} from '../../../Atoms/Common/Text';
import {Spacer} from '../../../Atoms/Common/Spacer';

export function LabelledSwitch({
    checked,
    setChecked,
    label = 'label',
}) {
    return (
        <FlexBox dir="row">
            <Text text={label} size="1rem"></Text>
            <Spacer width="50px"/>
            <StyledSwitch onChange={setChecked}/>
        </FlexBox>
    );
}