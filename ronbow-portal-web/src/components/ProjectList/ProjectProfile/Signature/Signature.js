import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
} from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ThemeProvider, createTheme } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: {
      main: '#5D6465',
    },
    secondary: {
      main: '#F0ECEC',
    },
    // You can also add additional colors here
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          cursor: 'pointer', // This ensures the cursor is a pointer
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: '#5D6465',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#5D6465',
            },
          },
          '&:not(.Mui-selected)': {
            // Define styles for non-selected state
            '&:hover': {
              backgroundColor: '#F0ECEC',
              color: '#5D6465',
            },
          },
        },
      },
    },
  },
});



const Signature = () => {
  const [selectedPackage, setSelectedPackage] = useState('');

  const handlePackageChange = (event, newPackage) => {
    if (newPackage !== null) { // Prevent deselecting all options
      setSelectedPackage(newPackage);
    }
  };

  // These are the checkboxes for each package
  const packageOptions = {
    designFee: ["Design fee & Deposit agreement"],
    deposit: [
      "Design fee & Deposit agreement",
      "Purchase agreement",
      "Terms and condition of sale",
      "Delivery agreement"
    ],
    finalPay: [
      "Purchase agreement",
      "Terms and condition of sale",
      "Delivery agreement",
      "Signed drawing",
      "Design summary",
      "Calculation summary"
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">Select a Package</FormLabel>
      <ToggleButtonGroup
        value={selectedPackage}
        exclusive
        onChange={handlePackageChange}
        aria-label="package selection"
      >
        <ToggleButton value="designFee" aria-label="design fee">
          $1500 Design Fee
        </ToggleButton>
        <ToggleButton value="deposit" aria-label="50% deposit">
          50% Deposit
        </ToggleButton>
        <ToggleButton value="finalPay" aria-label="100% final pay">
          100% Final Pay
        </ToggleButton>
      </ToggleButtonGroup>

      <FormGroup>
        {selectedPackage && packageOptions[selectedPackage].map((option, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox name={option} />}
            label={option}
          />
        ))}
      </FormGroup>
    </FormControl>
    </ThemeProvider>
  );
};

export default Signature;
