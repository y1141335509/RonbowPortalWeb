import * as React from 'react';
import Box from '../../../../../node_modules/@mui/material/Box';
import Stepper from '../../../../../node_modules/@mui/material/Stepper';
import Step from '../../../../../node_modules/@mui/material/Step';
import StepLabel from '../../../../../node_modules/@mui/material/StepLabel';
import StepContent from '../../../../../node_modules/@mui/material/StepContent';
import Button from '../../../../../node_modules/@mui/material/Button';
import Paper from '../../../../../node_modules/@mui/material/Paper';
import Typography from '../../../../../node_modules/@mui/material/Typography';
import { Divider, Steps, Checkbox, ConfigProvider, Collapse, } from 'antd';
import ProgressCheckbox from './ProgressCheckbox/ProgressCheckbox';
import MUITheme from './MUITheme';
import { ThemeProvider } from '@emotion/react';
import './Progress-Test.css';


const steps = [
  {
    label: 'Receive Lead',
    description: <div style={{ fontSize: '12px', }}>
      <p ><Checkbox checked={true} /> Review Documents</p>
      <p ><Checkbox checked={true} /> Learn About Clients</p>
      <p ><Checkbox checked={true} /> Get Inspired</p>
    </div>,
    deadline: 'by 01/01/2023',
  },
  {
    label: '1st Meeting',
    description:
      <div style={{ fontSize: '12px', }}>
        <p ><ProgressCheckbox /> Review Meeting Notes</p>
        <p ><ProgressCheckbox /> Design</p>
        <p ><ProgressCheckbox /> Generate Proposal</p>
        <p ><ProgressCheckbox /> Validate Requirements</p>
        <p ><ProgressCheckbox /> Generate Documents</p>
      </div>,
      deadline: 'by 01/04/2023',
  },
  {
    label: 'Present Design & Proposal',
    description: <div style={{ fontSize: '12px', }}>
      <p ><ProgressCheckbox /> Update documents if needed</p>
    </div>,
    deadline: 'by 01/06/2023',
  },
  {
    label: 'Finalize the Design',
    description: <div style={{ fontSize: '12px', }}>
      <p ><ProgressCheckbox /> Check Documents</p>
      <p ><ProgressCheckbox /> Receive Payment</p>
      <p ><ProgressCheckbox /> Verify Design</p>
      <p ><ProgressCheckbox /> Customer Confirmed and Paid</p>
    </div>,
    deadline: 'by 01/09/2023',
  },
  {
    label: 'Submit Project',
    description: <div style={{ fontSize: '12px', }}>
      <p >Project Check</p>
    </div>,
    deadline: 'by 01/11/2023',
  },
  {
    label: 'Manufacture',
    description: <div style={{ fontSize: '12px', }}>
    </div>,
    deadline: 'by 01/13/2023',
  },
  {
    label: 'Delivery & Installation',
    description: <div style={{ fontSize: '12px', }}>
    </div>,
    deadline: 'by 01/14/2023',
  },
  {
    label: 'Celebration',
    description: <div style={{ fontSize: '12px', }}>
    </div>,
    deadline: 'by 01/21/2023',
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
    <ThemeProvider theme={MUITheme}>
      <Box sx={{ maxWidth: 400, }}>
        <Stepper activeStep={activeStep} orientation="vertical" >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel key={step.deadline}
                optional={
                  <Typography variant="caption" color="rgba(0, 0, 0, 0.38)">
                    {step.deadline}
                  </Typography>
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
    </ThemeProvider>
  );
}