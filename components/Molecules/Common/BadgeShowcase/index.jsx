import { Badge } from '../../../Atoms/Common/Badge';
import { FlexBox } from '../../../../styles/globals';
import { Text } from '../../../Atoms/Common/Text';
import { Spacer } from '../../../Atoms/Common/Spacer';


export function BadgeShowcase() {
    return (
        <FlexBox padding='1rem 3rem 1rem 3rem' align="stretch" justify="center" bgColor="#DFEEFF">
            <FlexBox dir="column" padding='1rem 2rem 1rem 2rem' margin='5px 0px 15px 0px' bgColor='#ffffff' borderRadius='0.5rem'>
                <Text size="1rem" weight="600" text="My Badge Showcase"></Text>
                <Spacer axis="vertical" size={15} />
                <FlexBox dir='row' flexWrap='wrap' gap='1.5rem' bgColor='#ffffff' borderRadius='0.5rem'>
                    {/* badges.map((badge) => <Badge badge = {badge} />) */}
                    <Badge />
                    <Badge />
                    <Badge />
                    <Badge />
                    <Badge />
                    <Badge />
                    <Badge />
                    <Badge />
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
}