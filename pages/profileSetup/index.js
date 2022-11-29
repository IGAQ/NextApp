import * as userService from '../../lib/services/userService';
import {CustomProfile} from '../../components/Templates/Common/CustomProfile';

export default function ProfileSetup() {
    const handleSubmit = async ({
        avatar,
        pronouns,
        openness,
        bio,
        sexuality,
        isGenderPrivate,
        isSexualityPrivate,
        isOpennessPrivate,
    }) => {
        await userService.setupUserProfile({
            avatar,
            bio,
            genderId: pronouns,
            opennessId: openness,
            sexualityId: sexuality,
            isGenderPrivate,
            isSexualityOpen: !isSexualityPrivate,
            isOpennessPrivate,
        });
    };

    return (
        <CustomProfile onSubmit={handleSubmit} onSkipNow={() => ''} editMode={true} />
    );
}