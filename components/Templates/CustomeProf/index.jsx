import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PostTitle } from '../../Atoms/Post/PostTitle';
import Image from 'next/image';
import { Button } from '../../Atoms/Common/Buttons/Button';
import { Background, FlexBox } from '../../../styles/globals';
import {BackArrow} from '../../Atoms/Common/BackArrow';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import {StyledSwitch} from '../../Atoms/Common/StyledSwitch';
import { ProfileBadge } from '../../Atoms/Common/Badge';


export function CustomProfile(){
    return (
        <Background height='100%'>
            <FlexBox dir='row' justify='space-between'>
                <BackArrow />
                <div>
                    Skip for now
                </div>
            </FlexBox>
            <form>
                <FlexBox align='flex-start' marginLeft='3em'>
                    <PostTitle title='Introduce yourself!' />
                    <input type='text' name='bio' placeholder='Write your bio...' size="40" height={'100px'}/>
                </FlexBox>
                <div>
                    <FlexBox align='flex-start' marginLeft='3em'>
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
                                <label for='avatar1'>
                                    <Image src='/profileicon2.svg' alt='avatar1' width={100} height={100}/>
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='avatar2' name='avatar' value='avatar2' />
                                <label for='avatar2'>
                                    <Image src='/profileicon3.svg' alt='avatar2' id='avatar2' width={100} height={100}/>
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='avatar3' name='avatar' value='avatar3' />
                                <label for='avatar3'>
                                    <Image src='/profileicon4.svg' alt='avatar3' id='avatar3' width={100} height={100}/>
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='avatar4' name='avatar' value='avatar4' />
                                <label for='avatar4'>
                                    <Image src='/profileicon5.svg' alt='avatar4' id='avatar4' width={100} height={100}/>
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='avatar5' name='avatar' value='avatar5' />
                                <label for='avatar5'>
                                    <Image src='/profileicon6.svg' alt='avatar5' id='avatar5' width={100} height={100}/>
                                </label>
                            </SwiperSlide>
                        </Swiper>
                    </Background>
                </div>
                <div>
                    <FlexBox align='center' justify='space-between' marginLeft='3em' dir='row'>
                        <PostTitle title='Pronoun Badge' />
                        <StyledSwitch></StyledSwitch>
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
                                <input type='hidden' id='him' name='pronoun' value='him' />
                                <label for='him'>
                                    <ProfileBadge> He/Him </ProfileBadge>
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='her' name='pronoun' value='her' />
                                <label for='her'>
                                    <ProfileBadge> She/Her </ProfileBadge>
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='them' name='pronoun' value='them' />
                                <label for='them'>                                
                                    <ProfileBadge> They/Them </ProfileBadge>
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='zim' name='pronoun' value='zim' />
                                <label for='zim'>
                                    <ProfileBadge> Zie/Zim </ProfileBadge>
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='em' name='pronoun' value='em' />
                                <label for='em'>
                                    <ProfileBadge> E/Em </ProfileBadge>
                                </label>
                            </SwiperSlide>
                        </Swiper>
                    </Background>
                </div>
                <div>
                    <FlexBox align='center' justify='space-between' marginLeft='3em' dir='row'>
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
                                <input type='hidden' id='comingOut' name='avatar' value='comingOut' />
                                <label for='comingOut'>
                                    <ProfileBadge color='#C2ADFF'>Coming Out</ProfileBadge>
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='out' name='avatar' value='out' />
                                <label for='out'>
                                    <ProfileBadge color='#C2ADFF'>Out</ProfileBadge>
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='questioning' name='avatar' value='questioning' />
                                <label for='questioning'>
                                    <ProfileBadge color='#C2ADFF'>Questioning</ProfileBadge>
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='notOut' name='avatar' value='notOut' />
                                <label for='notOut'>
                                    <ProfileBadge color='#C2ADFF'>Not Out</ProfileBadge>
                                </label>
                            </SwiperSlide>
                            <SwiperSlide>
                                <input type='hidden' id='ally' name='avatar' value='ally' />
                                <label for='ally'>
                                    <ProfileBadge color='#C2ADFF'>Ally</ProfileBadge>
                                </label>
                            </SwiperSlide>
                        </Swiper>
                    </Background>
                </div>
                <div>
                    <FlexBox align='center' justify='space-between' marginLeft='3em' dir='row'>
                        <PostTitle title='Sexuality'></PostTitle>
                        <StyledSwitch></StyledSwitch>
                    </FlexBox>
                    <FlexBox align='flex-start' marginLeft='3em'> 
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