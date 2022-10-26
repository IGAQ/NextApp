import { Badge } from '../../Atoms/Badge';
import { FlexBox } from '../../../styles/globals';
import {Text} from '../../Atoms/Text';



export function BadgeShowcase({badges}) {
    <FlexBox dir = "column" padding = "15px 0 0 0 ">
        <Text size = "1rem" weight = "600" text = "My badge showcase"></Text>
        <FlexBox dir = "row" flexWrap = "wrap" gap = "1rem">
            {/* badges.map((badge) => <Badge badge = {badge} />) */}
            <Badge/>
            <Badge/>
            <Badge/>
            <Badge/>
            <Badge/>
            <Badge/>
            <Badge/>
        </FlexBox>
    </FlexBox>;
}