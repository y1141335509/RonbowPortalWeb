import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import './notification.css';



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
          float: 'right', 
          borderColor: '#5D6465', 
        }}
        onClick={showDrawer}>
        See Notifications
      </Button>
      <Drawer 
        title="Notifications" 
        placement="right" 
        onClose={onClose} 
        size='160px'
        open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default App;