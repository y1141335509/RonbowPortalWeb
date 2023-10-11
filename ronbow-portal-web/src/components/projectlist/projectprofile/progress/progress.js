import React from 'react';
import { Divider, Steps } from 'antd';
import ProgressCheckbox from './progresscheckbox/progresscheckbox';
import './progress.css';



const App = () => (
  <>
    <Steps
      progressDot
      current={1}
      direction="vertical"
      items={[
        {
          title: 'Receive Lead',
          description: <div> 
            <p><ProgressCheckbox/> Review Documents</p>
            <p><ProgressCheckbox/> Learn About Clients</p>
            <p><ProgressCheckbox/> Get Inspired</p>
            by 01/01/2023
          </div>,
        },
        {
          title: '1st Meeting',
          description: <div>
            <p><ProgressCheckbox/> Review Meeting Notes</p>
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
          title: 'Design Review',
          description: <div> 
          <p><ProgressCheckbox/> Check Documents</p>
          <p><ProgressCheckbox/> Receive Payment</p>
          <p><ProgressCheckbox/> Verify Design</p>
          by 01/9/2023
        </div>, 
        },
        {
          title: 'Submit Project',
          description: <div>
          by 1/11/2023  
          <p>Project Check</p>
        </div>,         },
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
);
export default App;