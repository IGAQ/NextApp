import { Text } from '../../Atoms/Text';
import { Radio } from '@mantine/core';
import { FlexBox } from '../../../styles/globals';

export function RadioGroup({tone, setTone}){

    return(
        <FlexBox>
            <Text text = "Set the tone" size = "1rem" textAlign='left'/>
            <Radio.Group
                value={tone}
                onChange={setTone}
                name="tone"
                aria-label="Set the tone"
                withAsterisk
                required
            >
                <Radio color = 'queeryPink.3' value="2a598b96-b878-4575-9601-180b3ac135e9" label="Casual" />
                <Radio color = 'queeryPink.3' value="79d8aca0-b08d-4910-9629-487567f9ab1c" label="Serious" />
            </Radio.Group>
        </FlexBox>
    );
}