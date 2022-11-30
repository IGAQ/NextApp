import styled from 'styled-components';

const SplashImgDiv = styled.div`
  height: 300px;
  width: 300px;
  background-image: url(${props => props.img});
  // background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export function SplashImg({img}) {
    return (
        <SplashImgDiv img={img}/>
    );
}
