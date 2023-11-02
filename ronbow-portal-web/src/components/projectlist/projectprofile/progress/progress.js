import React from 'react';
import { Divider, Steps, Checkbox, ConfigProvider, Collapse,  } from 'antd';
import ProgressCheckbox from './ProgressCheckbox/ProgressCheckbox';
import './Progress.css';



const { Panel } = Collapse;
const todos = [
  {
    key: '1',
    label: 'Receive Lead',
    children: <div>
      <p>Hello world, check out this <a href="https://www.ronbow.com" target="_blank" rel="noopener noreferrer">Ronbow Site </a>.</p>
    </div>
    ,
    headerStyle: { fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '2',
    label: 'BASIC INFO',
    children: <div>
      <ul>
        <li>Budget: $80K</li>
        <li>
          <p>Location: 680 8th St Suite 166, San Francisco, CA 94103 <a href="https://www.google.com/maps/place/Ronbow+-+San+Francisco+Showroom/@37.7705158,-122.4047388,17z/data=!3m1!4b1!4m6!3m5!1s0x808f7ff6c1506edd:0x6e721d2aa659d15b!8m2!3d37.7705158!4d-122.4047388!16s%2Fg%2F11krc64xsh?entry=ttu">(See Google Map) </a></p>
        </li>
      </ul>

    </div>,
    headerStyle: { fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
];


const App = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#5D6465',
        colorSuccess: '#F0ECEC',
      }
    }}
  >
    <>
      <Steps
        progressDot
        current={1}
        direction="vertical"
        accordion={true}
        items={[
          {
            title: 'Receive Lead',
            description: 
            <div> 
              <p><ProgressCheckbox checked={true} /> Review Documents</p>
              <p><ProgressCheckbox checked={true} /> Learn About Clients</p>
              <p><ProgressCheckbox checked={true} /> Get Inspired</p>
              by 01/01/2023
            </div>,
          },
          {
            title: '1st Meeting',
            description: <div>
              <p ><ProgressCheckbox/> Review Meeting Notes</p>
              <p><ProgressCheckbox/> Design</p>
              <p><ProgressCheckbox/> Generate Proposal</p>
              <p><ProgressCheckbox/> Validate Requirements</p>
              <p><ProgressCheckbox/> Generate Documents</p>
              by 01/04/2023
            </div>, 
          },
          {
            title: 'Present Design & Proposal',
            description: <div> 
            <p><ProgressCheckbox/> Update documents if needed</p>
            by 01/06/2023
          </div>, 
          },
          {
            title: 'Collect 1st Payment',
            description: <div> 
            <p><ProgressCheckbox/> Job Site Visit</p>
            <p><ProgressCheckbox/> Update Design</p>
            by 01/08/2023
          </div>, 
          },
          {
            title: 'Finalize the Design',
            description: <div> 
            <p><ProgressCheckbox/> Check Documents</p>
            <p><ProgressCheckbox/> Receive Payment</p>
            <p><ProgressCheckbox/> Verify Design</p>
            <p><ProgressCheckbox/> Customer Confirmed and Paid</p>
            by 01/9/2023
          </div>, 
          },
          {
            title: 'Submit Project',
            description: <div>
            by 1/11/2023  
            <p>Project Check</p>
          </div>,         
          },
          {
            title: 'Manufacture',
            description: <div>
              by 1/13/2023
          </div>,   
          },
          {
            title: 'Delivery & Installation',
            description: <div>
              by 1/14/2023
          </div>,   
          },
          {
            title: 'Celebration',
            description: <div>
              by 1/21/2023
          </div>,   
          },
        ]}
      />
    </>
  </ConfigProvider>
);
export default App;
















