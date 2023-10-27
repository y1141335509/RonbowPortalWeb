import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';




const theme = createTheme({
  palette: {
    primary: {
      main: '#5D6465',
    },
    secondary: {
      main: '#F0ECEC',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontWeightLight: 200,
    fontSize: 14,
    body1: {
      fontSize: '12px',
      fontWeight: 150,
    },
    body2: {
      fontSize: '14px',
    },
  },
});


const steps = [
  {
    label: 'Receive Lead',
    description:
      <div style={{ fontSize: '12px' }}>
        <List dense style={{ padding: 0 }}>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox checked={true} size="small" />
            Review Documents
          </ListItem>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox checked={true} size="small" />
            Learn About Clients
          </ListItem>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox checked={true} size="small" />
            Get Inspired
          </ListItem>
        </List>
      </div>,
    deadline: 'by 01/01/2023',
  },
  {
    label: '1st Meeting',
    description:
      <div style={{ fontSize: '12px' }}>
        <List dense style={{ padding: 0 }}>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Review Documents
          </ListItem>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Design
          </ListItem>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Generate Proposal
          </ListItem>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Validate Requirements
          </ListItem>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Generate Documents
          </ListItem>
        </List>
      </div>,
    deadline: 'by 01/04/2023',
  },
  {
    label: 'Present Design & Proposal',
    description: <div style={{ fontSize: '12px', }}>
      <p ><Checkbox /> Update documents if needed</p>
    </div>,
    deadline: 'by 01/06/2023',
  },
  {
    label: 'Finalize the Design',
    description:
      <div style={{ fontSize: '12px' }}>
        <List dense style={{ padding: 0 }}>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Check Documents
          </ListItem>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Receive Payment
          </ListItem>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Verify Design
          </ListItem>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Customer Confirmed and Paid
          </ListItem>
        </List>
      </div>,
    deadline: 'by 01/09/2023',
  },
  {
    label: 'Submit Project',
    description:
      <div style={{ fontSize: '12px' }}>
        <List dense style={{ padding: 0 }}>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Project Check
          </ListItem>
        </List>
      </div>,
    deadline: 'by 01/11/2023',
  },
  {
    label: 'Manufacture',
    description:
      <div style={{ fontSize: '12px' }}>
        <List dense style={{ padding: 0 }}>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Manufacture
          </ListItem>
        </List>
      </div>,
    deadline: 'by 01/13/2023',
  },
  {
    label: 'Delivery & Installation',
    description:
      <div style={{ fontSize: '12px' }}>
        <List dense style={{ padding: 0 }}>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Devliery and Installation
          </ListItem>
        </List>
      </div>,
    deadline: 'by 01/14/2023',
  },
  {
    label: 'Celebration',
    description:
      <div style={{ fontSize: '12px' }}>
        <List dense style={{ padding: 0 }}>
          <ListItem style={{ padding: '0 0 0 0' }}>
            <Checkbox size="small" />
            Celebration
          </ListItem>
        </List>
      </div>,
    deadline: 'by 01/21/2023',
  },
];



export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [allStepsExpanded, setAllStepsExpanded] = React.useState(false);

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
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 400 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography sx={{ mr: 1 }}>Expand All Steps:</Typography>
          <Switch
            checked={allStepsExpanded}
            onChange={(event) => setAllStepsExpanded(event.target.checked)}
            inputProps={{ 'aria-label': 'Expand all steps switch' }}
          />
        </Box>

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} expanded={allStepsExpanded || (activeStep === index && !allStepsExpanded)}>  {/* Adjust expanded property */}
              <StepLabel
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