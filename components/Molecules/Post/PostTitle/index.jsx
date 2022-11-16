import {FlexBox} from '../../../../styles/globals';
import {Text} from '../../../Atoms/Text';
import {Spacer} from '../../../Atoms/Spacer';

export function PostTitle({title}) {
    return (
        <FlexBox align="stretch" margin="0">
            {/* <BackArrow/> */}
            <Spacer axis="vertical" size={25}/>
            <Text as="h1" weight="600" size="2.25rem" textAlign="center" text={title}/>
            <Spacer axis="vertical" size={25}/>
        </FlexBox>
    );
}