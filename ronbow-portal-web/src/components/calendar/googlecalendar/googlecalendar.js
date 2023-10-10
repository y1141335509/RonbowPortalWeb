import React, { useState } from 'react';
import { Button } from 'antd';
import './googlecalendar.css';



const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        style={{
          backgroundColor: 'white',
          color: '#5D6465', 
          borderColor: '#5D6465', 
          cursor: 'pointer', 
        }}
        onClick={() => {window.open('https://calendar.google.com/calendar', "_blank")}}
      >
        Go to Google Calendar
      </Button>
    </>
  );
};
export default App;