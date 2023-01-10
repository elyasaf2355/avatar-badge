import { Avatar } from "@mui/material";
import Badge from '@mui/material/Badge';
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';
import FemaleIcon from "@mui/icons-material/Female";
import './avatar-badge.styles.scss'


//this function create color from avatar name
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

//this function returns the first letters of avatar name
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

  const badgeStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '1px solid #FFFFFF',
    color: 'white',  }

  //this function checking the gender and returns matching badge
  const whichGender = (gender)=>{
    if (typeof gender != "string")
      {console.log("error! unvalid value! gender must be a string");}
    if (gender === "male")
      {return <MaleRoundedIcon 
        sx={{...badgeStyle, backgroundColor: '#1E3EE8F5',}} />
        }
    if (gender === "female")
      {return <FemaleIcon
        sx={{...badgeStyle, backgroundColor: '#FC0097',}} />
        }
  
  
  }

function AvatarWithBadge({ fullName, gender }) {

const badgeContent = whichGender(gender);



  return (
    <Badge
    badgeContent={badgeContent}
    >
      <Avatar {...stringAvatar(fullName)} />
    </Badge>
  );
}

export default AvatarWithBadge;
