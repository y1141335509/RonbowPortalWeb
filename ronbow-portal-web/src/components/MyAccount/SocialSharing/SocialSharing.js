import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Input,
} from '@mui/material';
import {
  Email as EmailIcon,
  Sms as SMSIcon,
  Pinterest as PinterestIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  ContentCopy as CopyIcon,
} from '@mui/icons-material';





const width_height = "24px";
const WechatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width_height} height={width_height} viewBox="0 0 64 64" fill="rgba(0, 0, 0, 0.54)">
    <path d="M 22.818359 8.453125 C 10.817359 8.454125 1 16.635281 1 26.863281 C 1 32.727281 4.1356406 37.772641 9.1816406 41.181641 L 6 49 L 15.044922 44.044922 C 17.362922 44.862922 20.090359 45.271484 22.818359 45.271484 C 23.411359 45.271484 23.997125 45.244125 24.578125 45.203125 C 27.200125 51.942125 34.582437 56.816406 43.273438 56.816406 C 45.534438 56.816406 47.747234 56.504625 49.865234 55.890625 L 55.931641 59.289062 C 56.237641 59.460062 56.574156 59.544922 56.910156 59.544922 C 57.352156 59.544922 57.793297 59.397375 58.154297 59.109375 C 58.790297 58.603375 59.057078 57.763375 58.830078 56.984375 L 57.294922 51.724609 C 60.938922 48.575609 63 44.305359 63 39.818359 C 63 30.685359 54.594516 23.232516 44.103516 22.853516 C 41.931516 14.580516 33.198359 8.453125 22.818359 8.453125 z M 15 17 C 16.65 17 18 18.35 18 20 C 18 21.65 16.65 23 15 23 C 13.35 23 12 21.65 12 20 C 12 18.35 13.35 17 15 17 z M 31 17 C 32.65 17 34 18.35 34 20 C 34 21.65 32.65 23 31 23 C 29.35 23 28 21.65 28 20 C 28 18.35 29.35 17 31 17 z M 43.271484 26.818359 C 51.943484 26.818359 59 32.650359 59 39.818359 C 59 43.513359 57.156547 46.912578 53.810547 49.392578 C 53.137547 49.891578 52.845078 50.756547 53.080078 51.560547 L 53.621094 53.412109 L 51.068359 51.982422 C 50.766359 51.813422 50.430797 51.728516 50.091797 51.728516 C 49.878797 51.728516 49.663031 51.761078 49.457031 51.830078 C 47.518031 52.476078 45.379484 52.818359 43.271484 52.818359 C 34.599484 52.818359 27.544922 46.986359 27.544922 39.818359 C 27.544922 32.650359 34.599484 26.818359 43.271484 26.818359 z M 37 35 A 2 2 0 0 0 37 39 A 2 2 0 0 0 37 35 z M 50.074219 35 C 48.968219 35 48 35.933 48 37 C 48 38.067 48.968219 39 50.074219 39 C 51.180219 39 52.148437 38.067 52.148438 37 C 52.148438 35.933 51.180219 35 50.074219 35 z"></path>
  </svg>
);

const wechatLink = `https://www.facebook.com/sharer/sharer.php?u=`;





const SocialSharing = () => {
  const [event, setEvent] = useState('');
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setEvent(event.target.value);
  };



  return (
    <div style={{ textAlign: 'center', }}>
      <TextField
        select
        label="Select Event"
        value={event}
        onChange={handleChange}
        variant="outlined"
        style={{ minWidth: '300px', }}
      >
        <MenuItem value="SJOpening">Holiday Events</MenuItem>
        <MenuItem value="SJOpening">SJ Opening</MenuItem>
        <MenuItem value="PaintingLineAnnounce">Painting Line Announce</MenuItem>
        <MenuItem value="CEU">CEU</MenuItem>
      </TextField>


      <div style={{ marginTop: '15px', }}>
        <IconButton aria-label="Email">
          <EmailIcon />
        </IconButton>
        <IconButton aria-label="SMS">
          <SMSIcon />
        </IconButton>
        <IconButton aria-label="Pinterest">
          <PinterestIcon />
        </IconButton>
        <IconButton aria-label="Facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="LinkedIn">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="WeChat">
          <WechatIcon />
        </IconButton>
      </div>

      <br />

      <TextField
          id="standard-textarea"
          label="Share your comments!"
          placeholder="Share your comments!"
          multiline
          style={{ minWidth: '300px', }}
        />
    </div>
  );
};

export default SocialSharing;







