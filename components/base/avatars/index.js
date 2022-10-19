import { Avatar } from "@mui/material";
import { bgcolor } from "@mui/system";
import styled from "styled-components";
import { deepOrange, deepPurple } from "@mui/material/colors";

const AvatarDiv = styled.div`
border-radius: 100%;
padding: 10px;
background-image: url(${props=>props.bgimage || "http://placekitten.com/50/50"});
width: fit-content;
`;
  const small = { width: 25, height: 25 };
  const large = { width: 50, height: 50 };

export default function Profile({
  AvaPic = "DF", 
  clr ="deepPurple", 
  size=small, 
  bgimage = "http://placekitten.com/50/50"}) {


  

    return (
        <AvatarDiv>
          <Avatar
          // src={AvaPic}
          sx={{ bgcolor: deepOrange[500], ...size}}
          >
            {AvaPic}
          </Avatar>
      </AvatarDiv>
    );
}