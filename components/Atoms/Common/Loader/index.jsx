import styled from 'styled-components';

const OutsideLoader = styled.div`
  position: fixed;
  z-index: 1700;
  top: 50%;
  left: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: ${props => props.display || 'flex'};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoaderColor = styled.div`
  --clr: #FFB6C3;
  /* color of spining  */
  width: 50px;
  height: 50px;
  position: relative;
`;

const InsiderLoader = styled.div`
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 10px solid transparent;
  border-top-color: var(--clr);
  z-index: 100;
  animation: spin 1s infinite;
`;

const LoaderDiv = styled.div`
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 10px solid transparent;
  border-top-color: var(--clr);
  border: 10px solid #ccc;
`;

export function Loader() {
    return (
        <OutsideLoader>
            <LoaderColor>
                <InsiderLoader/>
                <LoaderDiv/>
            </LoaderColor>
        </OutsideLoader>
    );
}