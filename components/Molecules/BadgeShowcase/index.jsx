import { Badge } from '../../Atoms/Badge';
import { FlexBox } from '../../../styles/globals';
import {Text} from '../../Atoms/Text';
import {Spacer} from '../../Atoms/Spacer';


export function BadgeShowcase() {
    return (
        <FlexBox dir = "column" padding = "15px 0 0 0 " margin = '0 20px'>
            <Text size = "1rem" weight = "600" text = "My badge showcase"></Text>
            <Spacer axis="vertical" size={15}/>
            <FlexBox dir = "row" flexWrap = "wrap" gap = "1rem">
                {/* badges.map((badge) => <Badge badge = {badge} />) */}
                <Badge/>
                <Badge/>
                <Badge/>
                <Badge/>
                <Badge/>
                <Badge/>
                <Badge/>
                <Badge/>
            </FlexBox>
        </FlexBox>
    );
}