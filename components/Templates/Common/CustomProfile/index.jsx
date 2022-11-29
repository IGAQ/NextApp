import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {PostTitle} from '../../../Atoms/Post/PostTitle';
import Image from 'next/image';
import {Button} from '../../../Atoms/Common/Buttons/Button';
import {Background, FlexBox} from '../../../../styles/globals';
import {BackArrow} from '../../../Atoms/Common/Buttons/BackArrow';
import {Navigation} from 'swiper';
import 'swiper/css/navigation';
import {StyledSwitch} from '../../../Atoms/Common/Switch';
import {badgesPaths} from '../../../../lib/constants/badgesPaths';
import React, {useEffect, useState} from 'react';
import {Select} from '@mantine/core';
import * as sexualityService from '../../../../lib/services/sexualityService';
import * as genderService from '../../../../lib/services/genderService';
import * as opennessService from '../../../../lib/services/opennessService';
import {camelize} from '../../../../lib/utils';
import {InPageLoader, PageLoader} from '../../../Atoms/Common/Loader';
import {ModalAlert} from '../../../Organisms/Common/Modals/ModalAlert';
import {useUser} from '../../../../lib/hooks/useUser';
import {useRouter} from 'next/router';
import {TextInput} from '../../../Atoms/Common/Inputs/TextInput';
import * as userService from '../../../../lib/services/userService';
import {Spacer} from '../../../Atoms/Common/Spacer';

const avatars = [
    {
        Avatar: (
            <SwiperSlide>
                <input type='hidden' id='profile2' name='profile2' value='profile2'/>
                <label htmlFor='profile2'>
                    <Image src={badgesPaths.avatars.profile2} alt='profile2' width={100} height={100}/>
                </label>
            </SwiperSlide>
        ),
        value: 'profile2',
    },
    {
        Avatar: (
            <SwiperSlide>
                <input type='hidden' id='profile3' name='profile3' value='profile3'/>
                <label htmlFor='profile3'>
                    <Image src={badgesPaths.avatars.profile3} alt='profile3' id='profile3' width={100} height={100}/>
                </label>
            </SwiperSlide>
        ),
        value: 'profile3',
    },
    {
        Avatar: (
            <SwiperSlide>
                <input type='hidden' id='profile4' name='profile4' value='profile4'/>
                <label htmlFor='profile4'>
                    <Image src={badgesPaths.avatars.profile4} alt='avatar3' id='profile4' width={100} height={100}/>
                </label>
            </SwiperSlide>
        ),
        value: 'profile4',
    },
    {
        Avatar: (
            <SwiperSlide>
                <input type='hidden' id='profile5' name='profile5' value='profile5'/>
                <label htmlFor='profile5'>
                    <Image src={badgesPaths.avatars.profile5} alt='profile5' id='profile5' width={100} height={100}/>
                </label>
            </SwiperSlide>
        ),
        value: 'profile5',
    },
    {
        Avatar: (
            <SwiperSlide>
                <input type='hidden' id='profile6' name='profile6' value='profile6'/>
                <label htmlFor='profile6'>
                    <Image src={badgesPaths.avatars.profile6} alt='profile6' id='profile6' width={100} height={100}/>
                </label>
            </SwiperSlide>
        ),
        value: 'profile6',
    },
];

export function CustomProfile({
    onSkipNow,
    onSubmit,

    editMode = false,
}) {
    const router = useRouter();
    const [user, userAuthLoaded] = useUser({redirectTo: '/login'});

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const [opennesses, setOpennesses] = useState([]);
    const [pronouns, setPronouns] = useState([]);
    // const [avatars, setAvatars] = useState([]);

    const [currentIndexForAvatar, setCurrentIndexForAvatar] = useState(0);
    const [currentIndexForPronoun, setCurrentIndexForPronoun] = useState(0);
    const [currentIndexForOpenness, setCurrentIndexForOpenness] = useState(0);

    const [isSexualityPrivate, setIsSexualityPrivate] = useState(false);
    const [isGenderPrivate, setIsGenderPrivate] = useState(false);
    const [isOpennessPrivate, setIsOpennessPrivate] = useState(false);

    const [inputBio, setInputBio] = useState('');

    const [currentSelectedSexuality, setCurrentSelectedSexuality] = useState(null);
    const [availableSexualities, setAvailableSexualities] = useState([]);
    useEffect(() => {
        if (!isLoading || !userAuthLoaded) {
            return;
        }
        (async function () {
            let sexualities = await sexualityService.getAllSexualities();
            let genders = await genderService.getAllGenders();
            let opennesses = await opennessService.getAllOpennesses();


            // --- Genders ---
            let currentIndexOfUserPronouns = 0;
            genders = genders.map((gender, i) => {
                if (editMode && gender.genderId === user.gender?.genderId) {
                    currentIndexOfUserPronouns = i;
                }
                return ({
                    Pronoun: (
                        <SwiperSlide>
                            <Image src={badgesPaths.pronouns[gender.genderPronouns.toLowerCase()]}
                                alt={gender.genderPronouns} width={100} height={100}/>
                        </SwiperSlide>
                    ),
                    value: gender.genderId,
                });
            });
            setPronouns([...genders]);
            if (editMode) {
                setCurrentIndexForPronoun(currentIndexOfUserPronouns);
            }


            // --- Openness ---
            let currentIndexOfUserOpenness = 0;
            opennesses = opennesses.map((openness, i) => {
                if (editMode && openness.opennessId === user.openness?.opennessId) {
                    currentIndexOfUserOpenness = i;
                }
                return ({
                    Openness: (
                        <SwiperSlide>
                            <Image src={badgesPaths.openness[camelize(openness.opennessDescription)]}
                                alt={camelize(openness.opennessDescription)} width={100} height={100}/>
                        </SwiperSlide>
                    ),
                    value: openness.opennessId,
                });
            });
            setOpennesses([...opennesses]);
            if (editMode) {
                setCurrentIndexForOpenness(currentIndexOfUserOpenness);
            }


            // --- Sexuality ---
            let currentUserSexuality = null;
            sexualities = sexualities.map((sexuality) => {
                if (editMode && sexuality.sexualityId === user.sexuality?.sexualityId) {
                    currentUserSexuality = sexuality.sexualityId;
                }
                return ({
                    value: sexuality.sexualityId,
                    label: sexuality.sexualityName,
                });
            });
            setAvailableSexualities([...sexualities]);
            if (editMode) {
                setCurrentSelectedSexuality(currentUserSexuality);

                // --- Privacy Rules ---
                const peekedUser = await userService.peekUserByUsername({username: user.username});
                if (peekedUser) {
                    setIsGenderPrivate(() => !peekedUser.gender);
                    setIsSexualityPrivate(() => !peekedUser.sexuality);
                    setIsOpennessPrivate(() => !peekedUser.openness);
                }

                // --- Bio & Avatar ---
                setInputBio(user.bio ?? '');
            }


            setIsLoading(false);
        })();
    }, [userAuthLoaded]);

    return !user || !userAuthLoaded ? (
        <PageLoader />
    ) : (
        <Background height='100vh'>
            <FlexBox dir='row' justify='space-between' maxWidth='50rem' margin='auto'>
                <BackArrow/>
                {!editMode && (<div onClick={onSkipNow}>Skip for now</div>)}
            </FlexBox>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!currentSelectedSexuality) {
                    setError('Please choose a sexuality.');
                }
                onSubmit({
                    avatar: avatars[currentIndexForAvatar].value,
                    pronouns: pronouns[currentIndexForPronoun].value,
                    openness: opennesses[currentIndexForOpenness].value,
                    bio: inputBio,
                    sexuality: currentSelectedSexuality,
                    isGenderPrivate,
                    isSexualityPrivate,
                    isOpennessPrivate,
                }).then(() => setSuccess(true)).catch(error => setError(error));
            }}>
                {error && (
                    <ModalAlert
                        onClick={() => setError(null)}
                        title='Error'
                        content={error}
                        moreText='Please try again.'
                    />
                )}
                {success && (
                    <ModalAlert
                        onClick={async () => await router.push('/profile')}
                        title='Saved'
                        content={'All set!'}
                        moreText='You can always change your preferences privacy rules for your pronouns and sexuality.'
                        buttonText='Gotcha'
                    />
                )}
                <FlexBox align='flex-start' marginLeft='3em' maxWidth='50rem' margin='auto'>
                    <PostTitle title='Introduce yourself!'/>
                    <input onChange={(e) => setInputBio(e.target.value)} value={inputBio} name="bio"
                        id="bio" placeholder="Write your bio..."/>
                </FlexBox>
                <div>
                    <FlexBox align='flex-start' maxWidth='50rem' margin='auto'>
                        <PostTitle title='Avatar Selection'/>
                    </FlexBox>
                    <Background color='#FFF'>
                        <Swiper
                            centeredSlides={true}
                            spaceBetween={30}
                            slidesPerView={4}
                            onActiveIndexChange={(e) => setCurrentIndexForAvatar(e.realIndex)}
                            loop={true}
                            navigation={true}
                            initialSlide={currentIndexForAvatar}
                            modules={[Navigation]}
                        >
                            {avatars.map((item) => item.Avatar)}
                        </Swiper>
                    </Background>
                </div>
                <div>
                    <FlexBox align='center' justify='space-between' dir='row' maxWidth='50rem' margin='auto'>
                        <PostTitle title='Pronoun Badge'/>
                        <FlexBox dir='row'>
                            {(editMode && isLoading) ? <InPageLoader/> : <StyledSwitch defaultValue={isGenderPrivate} onChange={setIsGenderPrivate} />}
                            Hide Pronoun
                        </FlexBox>
                    </FlexBox>
                    <Background color='#fff'>
                        {isLoading ? (
                            <InPageLoader/>
                        ) : (
                            <Swiper
                                centeredSlides={true}
                                spaceBetween={30}
                                slidesPerView={4}
                                onActiveIndexChange={(e) => setCurrentIndexForPronoun(e.realIndex)}
                                loop={true}
                                navigation={true}
                                initialSlide={currentIndexForPronoun}
                                modules={[Navigation]}
                            >
                                {pronouns.map((item) => item.Pronoun)}
                            </Swiper>
                        )}
                    </Background>
                </div>
                <div>
                    <FlexBox align='center' justify='space-between' maxWidth='50rem' margin='auto' dir='row'>
                        <PostTitle title='Openness Badge'/>
                        <FlexBox dir='row'>
                            {(editMode && isLoading) ? <InPageLoader/> : <StyledSwitch defaultValue={isOpennessPrivate} onChange={setIsOpennessPrivate} />}
                            Hide Openness
                        </FlexBox>
                    </FlexBox>
                    <Background color='#fff'>
                        {isLoading ? (
                            <InPageLoader/>
                        ) : (
                            <Swiper
                                centeredSlides={true}
                                spaceBetween={30}
                                slidesPerView={4}
                                onActiveIndexChange={(e) => setCurrentIndexForOpenness(e.realIndex)}
                                loop={true}
                                navigation={true}
                                modules={[Navigation]}
                            >
                                {opennesses.map((item) => item.Openness)}
                            </Swiper>
                        )}
                    </Background>
                </div>
                <div>
                    <FlexBox align='center' justify='space-between' maxWidth='50rem' margin='auto' dir='row'>
                        <PostTitle title='Sexuality'></PostTitle>
                        <FlexBox dir='row'>
                            {(editMode && isLoading) ? <InPageLoader/> : <StyledSwitch defaultValue={isSexualityPrivate} onChange={setIsSexualityPrivate} />}
                            Hide Sexuality
                        </FlexBox>
                    </FlexBox>
                    <FlexBox align='flex-start' maxWidth='50rem' margin='auto'>
                        <Select
                            label="Sexuality"
                            placeholder="Sexuality"
                            data={availableSexualities}
                            value={currentSelectedSexuality}
                            onChange={setCurrentSelectedSexuality}
                        />
                    </FlexBox>
                </div>
                <FlexBox margin='3em'>
                    <Button size='large' color='primary' type='submit' label={editMode ? 'Save Changes' : 'Set up Profile'}></Button>
                </FlexBox>
            </form>
        </Background>
    );
} 