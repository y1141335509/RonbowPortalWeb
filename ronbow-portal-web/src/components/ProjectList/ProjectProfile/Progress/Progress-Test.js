import * as React from 'react';
import Box from '../../../../../node_modules/@mui/material/Box';
import Stepper from '../../../../../node_modules/@mui/material/Stepper';
import Step from '../../../../../node_modules/@mui/material/Step';
import StepLabel from '../../../../../node_modules/@mui/material/StepLabel';
import StepContent from '../../../../../node_modules/@mui/material/StepContent';
import Button from '../../../../../node_modules/@mui/material/Button';
import Paper from '../../../../../node_modules/@mui/material/Paper';
import Typography from '../../../../../node_modules/@mui/material/Typography';
import { Divider, Steps, Checkbox, ConfigProvider, Collapse,  } from 'antd';
import ProgressCheckbox from './ProgressCheckbox/ProgressCheckbox';



const steps = [
  {
    label: 'Receive Lead',
    description: <div> 
    <p><Checkbox checked={true} /> Review Documents</p>
    <p><Checkbox checked={true} /> Learn About Clients</p>
    <p><Checkbox checked={true} /> Get Inspired</p>
    by 01/01/2023
  </div>,
  },
  {
    label: '1st Meeting',
    description:
    <div>
        <p><ProgressCheckbox/> Review Meeting Notes</p>
        <p><ProgressCheckbox/> Design</p>
        <p><ProgressCheckbox/> Generate Proposal</p>
        <p><ProgressCheckbox/> Validate Requirements</p>
        <p><ProgressCheckbox/> Generate Documents</p>
        by 01/04/2023
    </div>, 
  },
  {
    label: 'Present Design & Proposal',
    description: <div> 
            <p><ProgressCheckbox/> Update documents if needed</p>
            by 01/06/2023
        </div>, 
  },
  {
    label: 'Finalize the Design',
    description: <div> 
        <p><ProgressCheckbox/> Check Documents</p>
        <p><ProgressCheckbox/> Receive Payment</p>
        <p><ProgressCheckbox/> Verify Design</p>
        <p><ProgressCheckbox/> Customer Confirmed and Paid</p>
        by 01/9/2023
    </div>, 
  },
  {
    label: 'Submit Project',
    description: <div>
        by 1/11/2023  
        <p>Project Check</p>
    </div>,   
  },
  {
    label: 'Manufacture',
    description: <div>
        by 1/13/2023
    </div>,   
  },
  {
    label: 'Delivery & Installation',
    description: <div>
        by 1/14/2023
    </div>,   
  },
  {
    label: 'Celebration',
    description: <div>
        by 1/21/2023
    </div>,   
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 7 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}