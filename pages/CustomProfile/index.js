import { CustomProfile } from '../../components/Templates/Common/CustomProfile';
import * as userService from '../../lib/services/userService';
import {useRouter} from 'next/router';

export default function ProfileSet() {
    const router = useRouter();

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

    const handleSkipNow = async () => {
        await router.push('/profile');
    };

    return (
        <div>
            <CustomProfile onSubmit={handleSubmit} onSkipNow={handleSkipNow} />
        </div>
    );
}