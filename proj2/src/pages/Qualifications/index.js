import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaitanya" src="https://www.google.com/search?q=sree+chaitanya+institute+of+technological+sciences+logo&rlz=1C1VDKB_enIN1048IN1048&sxsrf=APwXEdd95F1falyLpvhWnY8KynQNCVl7bQ%3A1680071912213&ei=6NwjZLnODIWN4-EP5KO8uAs&ved=0ahUKEwi54pjMw4D-AhWFxjgGHeQRD7cQ4dUDCA8&uact=5&oq=sree+chaitanya+institute+of+technological+sciences+logo&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABOgoIABBHENYEELADOgoIABCKBRCwAxBDOg0IABDkAhDWBBCwAxgBOhUILhCKBRDHARCvARDIAxCwAxBDGAI6BQgAEIAEOggIABCKBRCGAzoFCAAQogQ6BwghEKABEApKBAhBGABQzgNY2Bhgrh1oAXABeACAAdACiAHECpIBBzAuMS4yLjKYAQCgAQHIAQ3AAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz-serp#imgrc=s9j4ieXWa9jEXM" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaithanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                73% CGPA
              </Typography>
              {" Electrical and Electronics Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="https://www.w3schools.com/howto/img_avatar.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Trinity Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                97% CGPA
              </Typography>
              {" MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://55knots.com.au/wp-content/uploads/2021/01/Zanj-Avatar-scaled.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Gouthami High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                95% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
