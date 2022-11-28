import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PostTitle } from '../../../Atoms/Post/PostTitle';
import Image from 'next/image';
import { Button } from '../../../Atoms/Common/Buttons/Button';
import { Background, FlexBox } from '../../../../styles/globals';
import { BackArrow } from '../../../Atoms/Common/Buttons/BackArrow';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import { StyledSwitch } from '../../../Atoms/Common/Switch';
import { ProfileBadge } from '../../../Atoms/Common/Badge';


export function CustomProfile() {
    return (
        <Background height='100vh'>
            <FlexBox dir='row' justify='space-between' maxWidth='50rem' margin='auto'>
                <BackArrow />
                <div>
                    Skip for now
                </div>
            </FlexBox>
            <form>
                <FlexBox align='flex-start' marginLeft='3em' maxWidth='50rem' margin='auto'>
                    <PostTitle title='Introduce yourself!' />
                    <input type='text' name='bio' placeholder='Write your bio...' size="40" height={'100px'} />
                </FlexBox>
                <div>
                    <FlexBox align='flex-start' maxWidth='50rem' margin='auto'>
                        <PostTitle title='Avatar Selection' />
                    </FlexBox>
                    <Background color='#FFF'>
                        <Swiper
                            centeredSlides={true}
                            spaceBetween={30}
                            slidesPerView={4}
                            onSwiper={(swiper) => console.log(swiper)}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                        >
                            <SwiperSlide>
                                <input type='hidden' id='avatar1' name='avatar' value='avatar1' />
                                <label htmlFor='avatar1'>
                                    <Image src='/profileIcon2.svg' alt='avatar1' width={100} height={100} />
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='avatar2' name='avatar' value='avatar2' />
                                <label htmlFor='avatar2'>
                                    <Image src='/profileIcon3.svg' alt='avatar2' id='avatar2' width={100} height={100} />
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='avatar3' name='avatar' value='avatar3' />
                                <label htmlFor='avatar3'>
                                    <Image src='/profileIcon4.svg' alt='avatar3' id='avatar3' width={100} height={100} />
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='avatar4' name='avatar' value='avatar4' />
                                <label htmlFor='avatar4'>
                                    <Image src='/profileIcon5.svg' alt='avatar4' id='avatar4' width={100} height={100} />
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='avatar5' name='avatar' value='avatar5' />
                                <label htmlFor='avatar5'>
                                    <Image src='/profileIcon6.svg' alt='avatar5' id='avatar5' width={100} height={100} />
                                </label>
                            </SwiperSlide>
                        </Swiper>
                    </Background>
                </div>
                <div>
                    <FlexBox align='center' justify='space-between' dir='row' maxWidth='50rem' margin='auto'>
                        <PostTitle title='Pronoun Badge' />
                        <FlexBox dir='row'>
                            <StyledSwitch></StyledSwitch>
                            Hide Pronoun
                        </FlexBox>
                    </FlexBox>
                    <Background color='#fff'>
                        <Swiper
                            centeredSlides={true}
                            spaceBetween={30}
                            slidesPerView={4}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                        >
                            <SwiperSlide>
                                <Image src='/HeHim.svg' alt='He/Him' width={100} height={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/SheHer.svg' alt='She/Her' width={100} height={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/TheyThem.svg' alt='They/Them' width={100} height={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/VeVer.svg' alt='Ve/Ver' width={100} height={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/XeXem.svg' alt='Xe/Xem' width={100} height={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/ZeZie.svg' alt='Ze/Zie' width={100} height={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/PronounNA.svg' alt='NA' width={100} height={100} />
                            </SwiperSlide>
                        </Swiper>
                    </Background>
                </div>
                <div>
                    <FlexBox align='center' justify='space-between' maxWidth='50rem' margin='auto' dir='row'>
                        <PostTitle title='Openness Badge' />
                        <FlexBox dir='row'>
                            <StyledSwitch></StyledSwitch>
                            Hide Openness
                        </FlexBox>
                    </FlexBox>
                    <Background color='#fff'>
                        <Swiper
                            centeredSlides={true}
                            spaceBetween={30}
                            slidesPerView={4}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                        >
                            <SwiperSlide>
                                <Image src='/FullyOut.svg' alt='FullyOut' width={100} height={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/NotOut.svg' alt='NotOut' width={100} height={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/OutToFew.svg' alt='OutToFew' width={100} height={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/SemiOut.svg' alt='SemiOut' width={100} height={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/Ally.svg' alt='Ally' width={100} height={100} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src='/OpennessNA.svg' alt='NA' width={100} height={100} />
                            </SwiperSlide>
                        </Swiper>
                    </Background>
                </div>
                <div>
                    <FlexBox align='center' justify='space-between' maxWidth='50rem' margin='auto' dir='row'>
                        <PostTitle title='Sexuality'></PostTitle>
                        <FlexBox dir='row'>
                            <StyledSwitch></StyledSwitch>
                            Hide Sexuality
                        </FlexBox>
                    </FlexBox>
                    <FlexBox align='flex-start' maxWidth='50rem' margin='auto'>
                        <input list='sexuality' name='sexuality' title='Sexuality' />
                        <datalist id='sexuality'>
                            {/* this needs to get mapped  */}
                            <option value='Asexual' />
                            <option value='Bisexual' />
                        </datalist>
                    </FlexBox>
                </div>
                <FlexBox margin='3em'>
                    <Button size='large' color='primary' type='submit' label='Set up Profile'></Button>
                </FlexBox>
            </form>
        </Background>
    );
} 