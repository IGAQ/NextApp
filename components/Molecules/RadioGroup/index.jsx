import {Text} from '../../Atoms/Text';
import {Radio} from '@mantine/core';
import {FlexBox} from '../../../styles/globals';

export function RadioGroup({tone, setTone}) {
    return (
        <FlexBox>
            <Text text="Set the tone" size="1rem" textAlign='left'/>
            <Radio.Group
                value={tone}
                onChange={setTone}
                name="tone"
                aria-label="Set the tone"
                withAsterisk
                required
            >
                <Radio color='queeryPink.3' value="casual" label="Casual"/>
                <Radio color='queeryPink.3' value="serious" label="Serious"/>
            </Radio.Group>
        </FlexBox>
    );
}