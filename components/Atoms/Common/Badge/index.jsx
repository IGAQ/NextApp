import styled from 'styled-components';
import {badgesPaths} from '../../../../lib/constants/badgesPaths';


export const StyledCircle = styled.div`
  border-radius: 100%;
  background-color: #393939;
  width: 3rem;
  height: 3rem;
  content:url(${props => props.badge || '/SheHer.svg'});
  margin: ${props => props.margin};
  `;

export const ProfileBadge = styled.div`
  height: 5.5em;
  width: 5.5em;
  background-color: ${props => props.color || '#FFB6C3'} ;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;



export function Badge({
    badge = badgesPaths.flags.pride,
    margin,
}) {
    return (
        <StyledCircle margin={margin} badge={badge}></StyledCircle>
    );
}