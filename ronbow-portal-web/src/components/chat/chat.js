import React from 'react'
import { Button, message } from 'antd'; 


export default function Chat() { 

return ( 
	<div style={{ 
        display: 'block', width: 700, padding: 30 
        }}> 
        <h4>ReactJS Ant-Design Message Component</h4> 
        <> 
            <Button type="primary"
            onClick={() => { 
            message.info('Message Content!'); 
            }} 
            > 
            Click me to see Message 
            </Button> 
        </> 
        </div> 
    ); 
}
